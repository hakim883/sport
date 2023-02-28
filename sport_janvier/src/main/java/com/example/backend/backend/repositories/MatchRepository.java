package com.example.backend.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.backend.models.Matche;

@Repository
public interface MatchRepository extends JpaRepository<Matche, Long> {

}
