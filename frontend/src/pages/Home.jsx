import React, { useState } from 'react';
import PromptInput from '../components/PromptInput';
import OutputDisplay from '../components/OutputDisplay';
import { generateProject } from '../services/api';

const Home = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await generateProject(prompt);
            setResult(data);
        } catch (err) {
            setError('Failed to generate project. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home-page">
            <header className="header">
                <h1>AI Project Generator</h1>
                <p>Describe your idea and let AI build the foundation.</p>
            </header>
            
            <main className="content">
                <PromptInput 
                    prompt={prompt} 
                    setPrompt={setPrompt} 
                    onGenerate={handleGenerate}
                    isLoading={isLoading}
                />
                
                {error && <div className="error-message">{error}</div>}
                
                <OutputDisplay result={result} />
            </main>
        </div>
    );
};

export default Home;
