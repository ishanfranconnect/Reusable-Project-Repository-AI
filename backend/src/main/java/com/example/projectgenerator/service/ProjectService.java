package com.example.projectgenerator.service;

import com.example.projectgenerator.model.Project;
import com.example.projectgenerator.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Transactional
    public Project processPrompt(String prompt) {
        // 1. Check if a similar project exists (exact match for now)
        Optional<Project> existingProject = projectRepository.findByPromptIgnoreCase(prompt);
        
        if (existingProject.isPresent()) {
            System.out.println("Returning existing project from repository: " + prompt);
            return existingProject.get();
        }

        // 2. If not found, "Generate" a new project (Mocking AI call for now)
        System.out.println("No matching project found. Generating new solution via AI...");
        String generatedSolution = generateMockSolution(prompt);
        
        Project newProject = new Project(prompt, generatedSolution);
        
        // 3. Save to database
        return projectRepository.save(newProject);
    }

    @Transactional(readOnly = true)
    public List<Project> searchProject(String keyword) {
        return projectRepository.findByPromptContainingIgnoreCase(keyword);
    }

    private String generateMockSolution(String prompt) {
        return "### Generated Solution for: " + prompt + "\n\n" +
               "This is a mocked AI response. In the next phase, we will integrate " +
               "the OpenAI/Gemini API to generate actual code, structure, and documentation.\n\n" +
               "**Project Structure:**\n" +
               "- /src\n" +
               "- /public\n" +
               "- package.json\n\n" +
               "**Sample Code snippets would appear here.**";
    }
}
