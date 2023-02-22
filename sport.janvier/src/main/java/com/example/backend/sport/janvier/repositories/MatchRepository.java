package com.example.backend.sport.janvier.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.sport.janvier.models.Matche;

@Repository
public interface MatchRepository extends JpaRepository<Matche, Long> {

}
