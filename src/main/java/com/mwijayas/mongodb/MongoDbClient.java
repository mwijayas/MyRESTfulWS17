package com.mwijayas.mongodb;

/**
 * Created by Mahima on 2/25/2015.
 */

import com.mongodb.BasicDBObject;
import com.mongodb.BulkWriteOperation;
import com.mongodb.BulkWriteResult;
import com.mongodb.Cursor;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.ParallelScanOptions;

import java.net.UnknownHostException;

public class MongoDbClient {
    public static MongoClient mongoClientInstance = null;

    public MongoDbClient() {
        try {
            mongoClientInstance = new MongoClient("localhost", 27017);
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }

    public MongoClient getClientInstance() {
        return mongoClientInstance;
    }
}
