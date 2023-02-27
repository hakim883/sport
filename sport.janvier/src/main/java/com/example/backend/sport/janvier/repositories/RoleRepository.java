package com.example.backend.sport.janvier.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.sport.janvier.models.ERole;
import com.example.backend.sport.janvier.models.Role;
@Repository

public interface RoleRepository extends JpaRepository<Role, Long>{
	Optional<Role> findByName(ERole name);

}
