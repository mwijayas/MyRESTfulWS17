package com.mwijayas.rest;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Mahima on 3/2/2015.
 */
@XmlRootElement
public class UserInfo {

    private String name;
    private double age;

    public UserInfo(String name, double age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAge() {
        return age;
    }

    public void setAge(double age) {
        this.age = age;
    }

    @Override
   	public String toString() {
   		return "UserInfo [name=" + name + ", age=" + age + "]";
   	}
}
