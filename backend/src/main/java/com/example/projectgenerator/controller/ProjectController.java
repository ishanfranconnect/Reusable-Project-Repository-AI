package com.example.projectgenerator.controller;

import com.example.projectgenerator.model.Project;
import com.example.projectgenerator.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/test")
    public ResponseEntity<String> testBackend() {
        return ResponseEntity.ok("Backend is running");
    }

    @PostMapping("/generate")
    public ResponseEntity<Project> generateProject(@RequestBody String prompt) {
        // Placeholder logic
        Project project = new Project(prompt, "Generated solution placeholder");
        return ResponseEntity.ok(project);
    }
}
