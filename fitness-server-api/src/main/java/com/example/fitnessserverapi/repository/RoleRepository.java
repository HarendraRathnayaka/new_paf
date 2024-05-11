package com.example.fitnessserverapi.repository;

import com.example.fitnessserverapi.model.ERole;
import com.example.fitnessserverapi.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}