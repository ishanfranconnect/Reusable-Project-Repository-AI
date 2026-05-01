import React from 'react';

const OutputDisplay = ({ result }) => {
    if (!result) return null;

    return (
        <div className="output-container">
            <h3>Generated Result:</h3>
            <div className="output-content">
                <pre>{result.solution || JSON.stringify(result, null, 2)}</pre>
            </div>
        </div>
    );
};

export default OutputDisplay;
