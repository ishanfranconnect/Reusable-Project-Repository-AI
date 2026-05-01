import React from 'react';

const PromptInput = ({ prompt, setPrompt, onGenerate, isLoading }) => {
    return (
        <div className="prompt-container">
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the project you want to generate..."
                rows="5"
                className="prompt-textarea"
            />
            <button 
                onClick={onGenerate} 
                disabled={isLoading || !prompt.trim()}
                className="generate-button"
            >
                {isLoading ? 'Generating...' : 'Generate Project'}
            </button>
        </div>
    );
};

export default PromptInput;
