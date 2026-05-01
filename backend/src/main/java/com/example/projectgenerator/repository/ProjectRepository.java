package com.example.projectgenerator.repository;

import com.example.projectgenerator.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findByPromptIgnoreCase(String prompt);
}
