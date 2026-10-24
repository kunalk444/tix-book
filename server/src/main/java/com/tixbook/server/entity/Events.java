package com.tixbook.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String eventName;



    private String eventUrl;

    public Events() {}

    public String getEventName() {
        return eventName;
    }

    public Events(Integer id, String eventName) {
        this.id = id;
        this.eventName = eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEventUrl() {
        return eventUrl;
    }

    public void setEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
    }


}
