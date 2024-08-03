import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import DropdownFilter from './components/DropdownFilter';

function App() {
    const [responseData, setResponseData] = useState(null);
    const [filter, setFilter] = useState([]);

    return (
        <div className="App">
            <h1>API Data Processor</h1>
            <InputForm onResponse={setResponseData} />
            <DropdownFilter onChange={setFilter} />
            <ResponseDisplay data={responseData} filter={filter} />
        </div>
    );
}

export default App;
