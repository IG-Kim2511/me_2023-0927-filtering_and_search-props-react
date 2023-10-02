import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

const App = () => {
  const [query, setQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange =(e)=>{
    setSelectedCategory(e.target.value);   
  }


  return (
    <div>
      <div>Query: {query}</div>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange}/>
    </div>
  );
};

export default App;
