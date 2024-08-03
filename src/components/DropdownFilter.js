// src/components/DropdownFilter.js
import React, { useState } from 'react';

const DropdownFilter = ({ onChange }) => {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        onChange(selected);
    };

    return (
        <div>
            <label>
                <input type="checkbox" value="Numbers" onChange={handleChange} />
                Numbers
            </label>
            <label>
                <input type="checkbox" value="Alphabets" onChange={handleChange} />
                Alphabets
            </label>
            <label>
                <input type="checkbox" value="Highest Alphabet" onChange={handleChange} />
                Highest Alphabet
            </label>
        </div>
    );
};

export default DropdownFilter;
