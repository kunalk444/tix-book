package com.tixbook.server.controller;

import com.tixbook.server.entity.City;
import com.tixbook.server.entity.Movies;
import com.tixbook.server.repository.MovieRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
public class ServerController {

    @Autowired
    private MovieRepository movieRepo;

    @PostMapping("/city")
    public Map<String , Boolean> getCity(@RequestBody City city , HttpServletResponse res){

        System.out.println("haha "+city.getCity());

        Cookie cookie = new Cookie("city" , city.getCity());
        cookie.setMaxAge(7*24*60*60);
        cookie.setPath("/");

        res.addCookie(cookie);

        return Map.of("success" , true);

    }

    @GetMapping("/movies")
    public List<Movies> getMovies(){

        return movieRepo.findAll();


    }


}
