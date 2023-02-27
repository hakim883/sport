package com.example.backend.sport.janvier.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.sport.janvier.models.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long>{

}
