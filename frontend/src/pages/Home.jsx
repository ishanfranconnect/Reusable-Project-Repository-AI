import React, { useState } from 'react';
import PromptInput from '../components/PromptInput';
import OutputDisplay from '../components/OutputDisplay';
import SearchGallery from '../components/SearchGallery';
import { generateProject } from '../services/api';

const Home = () => {
    const [mode, setMode] = useState('generate'); // 'generate' or 'explore'
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
            const data = await generateProject(prompt);
            setResult(data);
        } catch (err) {
            setError('Failed to generate project. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectFromGallery = (project) => {
        setResult(project);
        setPrompt(project.prompt);
        setMode('generate');
    };

    return (
        <div className="home-page">
            <header className="header">
                <h1>AI Project Generator</h1>
                <p>Build or reuse foundations for your next big idea.</p>
                
                <div className="mode-toggle">
                    <button 
                        className={mode === 'generate' ? 'active' : ''} 
                        onClick={() => setMode('generate')}
                    >
                        Generate New
                    </button>
                    <button 
                        className={mode === 'explore' ? 'active' : ''} 
                        onClick={() => setMode('explore')}
                    >
                        Explore Repository
                    </button>
                </div>
            </header>
            
            <main className="content">
                {mode === 'explore' ? (
                    <SearchGallery onSelectProject={handleSelectFromGallery} />
                ) : (
                    <>
                        <PromptInput 
                            prompt={prompt} 
                            setPrompt={setPrompt} 
                            onGenerate={handleGenerate}
                            isLoading={isLoading}
                        />
                        
                        {error && <div className="error-message">{error}</div>}
                        
                        <OutputDisplay result={result} />
                    </>
                )}
            </main>
        </div>
    );
};

export default Home;
