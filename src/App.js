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
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  
  // 🍀js 105 ------ Radio Filtering -----------
  const handleSelectedChange =(e)=>{
    setSelectedCategory(e.target.value);   
  }

  // ------------ Button Filtering -----------
  const handleSelectedClick =(e)=>{
    setSelectedCategory(e.target.value);
  }


  return (
    <div>
      <div>Query: {query}</div>
      <Nav query={query} handleQueryChange={handleQueryChange} />
      <Sidebar handleSelectedChange={handleSelectedChange}/>

      <FilterBybutton handleSelectedClick={handleSelectedClick}/>
      {/* 🎃  
      <Products result={result} />
     */}

    </div>
  );
};

export default App;
