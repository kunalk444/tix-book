package com.tixbook.server.dto;


public class City {

    private String city;

    City(String city){
        this.city = city;
    }


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
