package com.example.backend.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.backend.models.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}