package com.example.ratemysingingproject;

public class Data {
    private String Name;
    private int Age;

    public Data() {}

    public Data(String Name, int Age) {
        this.Name = Name;
        this.Age = Age;
    }

    public String getName() {
        return Name;
    }

    public int getAge() {
        return Age;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setAge(int age) {
        Age = age;
    }
}
