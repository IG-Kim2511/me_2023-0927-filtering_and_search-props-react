import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import FilterBybutton from './components/FilterBybutton';

const App = () => {

  // 👉105
  const [selectedCategory, setSelectedCategory] = useState(null)

  // ----------- Input Filter -----------  
  //🍀js 100  query : nav input search bar에서의 value
  const [query, setQuery] = useState('');

  // 👉js 100
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  
  // 🍀js 105 ------ Radio Filtering -----------
  const handleChange =(e)=>{
    setSelectedCategory(e.target.value);   
  }

  // ------------ Button Filtering -----------
  const handleClick =(e)=>{
    setSelectedCategory(e.target.value);
  }


  return (
    <div>
      <div>Query: {query}</div>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange}/>

      <FilterBybutton handleClick={handleClick}/>
      {/* 🎃  
      <Recommended handleClick={handleClick} />
      <Products result={result} />
     */}

    </div>
  );
};

export default App;
