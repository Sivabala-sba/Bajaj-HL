import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onResponse }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Check if input is a valid JSON
            const data = JSON.parse(input);

            // Validate if the data contains the required field
            if (!data.data || !Array.isArray(data.data)) {
                throw new Error('Invalid data format');
            }

            // Send request to the specified endpoint
            const response = await axios.post('http://localhost:5000/bfhl', data);
            onResponse(response.data);
        } catch (err) {
            console.error('Parsing or API error:', err);
            setError('Invalid JSON input or network error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows="10"
                cols="50"
                placeholder='Enter JSON here, e.g., {"data": ["A", "C", "z"]}'
            />
            <button type="submit">Submit</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default InputForm;
