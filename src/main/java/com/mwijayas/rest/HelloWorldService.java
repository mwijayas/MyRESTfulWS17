package com.mwijayas.rest;


import com.mongodb.*;
import com.mwijayas.mongodb.MongoDbClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Mahima on 2/17/2015.
 * <p/>
 * http://localhost:8080/rest/hello/Mahima
 */
@Path("/hello")
public class HelloWorldService {
    /*@GET
    @Path("/{param}")
    public Response getMsg(@PathParam("param") String msg) {

        String output = "Jersey say : " + msg;

        return Response.status(200).entity(output).build();

    }  */


    @GET
    @Path("/{param}")
    public Response getDbContent(@PathParam("param") String name) {

        String output = "Jersey say : " + name;

        MongoDbClient mongoDbClient = new MongoDbClient();
        MongoClient mongoClient = mongoDbClient.getClientInstance();
        DB db = mongoClient.getDB("mydb");

        //MongoCredential credential = MongoCredential.createMongoCRCredential(userName, database, password);
        //MongoClient mongoClient = new MongoClient(new ServerAddress(), Arrays.asList(credential));

        DBCollection testData = db.getCollection("testData");
        DBCursor cursor = testData.find();
        try {
            while (cursor.hasNext()) {
                DBObject record = (cursor.next());
                System.out.println(record);
                output = output + record;
            }
        } finally {
            cursor.close();
        }

        return Response.status(200).entity(output).build();

    }

    @GET
    @Path("/dbUserList")
    @Produces("application/json")
    public List getDbContentList(@PathParam("param") String name) {

        List userList = new ArrayList<UserInfo>();

        MongoDbClient mongoDbClient = new MongoDbClient();
        MongoClient mongoClient = mongoDbClient.getClientInstance();
        DB db = mongoClient.getDB("mydb");

        //MongoCredential credential = MongoCredential.createMongoCRCredential(userName, database, password);
        //MongoClient mongoClient = new MongoClient(new ServerAddress(), Arrays.asList(credential));

        DBCollection testData = db.getCollection("testData");
        DBCursor cursor = testData.find();
        try {
            UserInfo uInfo = new UserInfo("", -99);
            while (cursor.hasNext()) {
                DBObject record = (cursor.next());
                System.out.println(record);
                //String uname = (String) record.get("name");
                //int age = 99;



                if (record.get("name") != null) {
                    uInfo.setName((String)record.get("name"));
                }

                if (record.get("age") != null) {
                    uInfo.setAge((Double)record.get("age"));
                    userList.add(uInfo);
                    uInfo = new UserInfo("", -99);
                }
            }
        } finally {
            cursor.close();
        }

        return userList;

    }

    @GET
    @Path("/singleUser")
    //@Produces("application/json")
    @Produces(MediaType.APPLICATION_JSON)
    public UserInfo getSingleUser() {


        UserInfo uInfo = new UserInfo("Scooby Doo", 10);


        return uInfo;

    }

    @GET
    @Path("/multipleUser")
    @Produces("application/json")
    public List<UserInfo> getMultipleUser() {

        List userList = new ArrayList<UserInfo>();


        UserInfo uInfo1 = new UserInfo("Scooby Doo", 10);
        UserInfo uInfo2 = new UserInfo("shaggy", 19);
        userList.add(uInfo1);
        userList.add(uInfo2);

        return userList;

    }
}
