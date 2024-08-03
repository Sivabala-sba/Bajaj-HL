// src/components/ResponseDisplay.js
import React from 'react';

const ResponseDisplay = ({ data, filter }) => {
    if (!data) return null;

    const filteredData = {
        numbers: filter.includes('Numbers') ? data.numbers : [],
        alphabets: filter.includes('Alphabets') ? data.alphabets : [],
        highest_alphabet: filter.includes('Highest Alphabet') ? data.highest_alphabet : [],
    };

    return (
        <div>
            <h2>Response</h2>
            <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
    );
};

export default ResponseDisplay;
