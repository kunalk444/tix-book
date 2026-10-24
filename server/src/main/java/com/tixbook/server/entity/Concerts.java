package com.tixbook.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Concerts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String concertName;

    private String concertUrl;

    public Concerts(Integer id, String concertName) {
        this.id = id;
        this.concertName = concertName;
    }

    public Concerts() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getConcertName() {
        return concertName;
    }

    public void setConcertName(String concertName) {
        this.concertName = concertName;
    }

    public String getConcertUrl() {
        return concertUrl;
    }

    public void setConcertUrl(String concertUrl) {
        this.concertUrl = concertUrl;
    }
}
