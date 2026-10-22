package com.tixbook.server.controller;

import com.tixbook.server.dto.City;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
public class ServerController {

    @PostMapping("/city")
    public Map<String , Boolean> getCity(@RequestBody City city , HttpServletResponse res){

        System.out.println("haha "+city.getCity());

        Cookie cookie = new Cookie("city" , city.getCity());
        cookie.setMaxAge(7*24*60*60);
        cookie.setPath("/");

        res.addCookie(cookie);

        return Map.of("success" , true);

    }


}
