package com.tixbook.server.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class City {

    @Id
    private Integer id;

    private String city;

    City(String city){
        this.city = city;
    }

    public City(){}


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
