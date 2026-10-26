package com.tixbook.server.repository;

import com.tixbook.server.entity.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movies , Integer> {
}
