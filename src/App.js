import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    // Do something with the query, e.g., send it to an API
    console.log(query);
  };

  return (
    <div>
      <h1>App</h1>
      <input type="text" onChange={handleInputChange} value={query} />
      <button onClick={handleSubmit}>Submit</button>
      <div>Query: {query}</div>

      <Nav query={query} handleInputChange={handleInputChange} />
    </div>
  );
};

export default App;
