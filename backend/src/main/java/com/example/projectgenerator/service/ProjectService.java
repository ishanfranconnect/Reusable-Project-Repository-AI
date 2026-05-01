package com.example.projectgenerator.service;

import com.example.projectgenerator.model.Project;
import com.example.projectgenerator.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // Service methods will be added here
}
