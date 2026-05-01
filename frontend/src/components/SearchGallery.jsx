import React, { useState, useEffect } from 'react';
import api from '../services/api';

const SearchGallery = ({ onSelectProject }) => {
    const [keyword, setKeyword] = useState('');
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        const value = e?.target?.value ?? keyword;
        setKeyword(value);
        
        if (value.length < 3) {
            setProjects([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await api.get(`/projects/search?keyword=${value}`);
            setProjects(response.data);
        } catch (error) {
            console.error("Search failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="search-gallery">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search existing solutions (e.g. 'React', 'Login')..." 
                    value={keyword}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>

            {isLoading && <p>Searching repository...</p>}

            <div className="project-grid">
                {projects.map(project => (
                    <div 
                        key={project.id} 
                        className="project-card"
                        onClick={() => onSelectProject(project)}
                    >
                        <h4>{project.prompt}</h4>
                        <p>{project.solution.substring(0, 100)}...</p>
                        <span className="badge">Reusable</span>
                    </div>
                ))}
            </div>

            {!isLoading && keyword.length >= 3 && projects.length === 0 && (
                <p className="no-results">No existing project found with that keyword. Try generating it!</p>
            )}
        </div>
    );
};

export default SearchGallery;
