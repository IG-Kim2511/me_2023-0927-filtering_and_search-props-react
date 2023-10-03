import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import FilterBybutton from './components/FilterBybutton';
import Products from './components/Products';
import data_products from './data';

const App = () => {

  // 👉105
  const [selected, setSelected] = useState(null)

  // ----------- Input Filter -----------  
  //🍀js 100  query : nav input search bar에서의 value
  const [query, setQuery] = useState('');

  // 👉js 100
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    console.log("handleQueryChange")
  };

  
  // 🍀js 105 ------ Radio Filtering -----------
  const handleSelectedChange =(e)=>{
    setSelected(e.target.value);   
    console.log("handleSelectedChange")

  }

  // ------------ Button Filtering -----------
  const handleSelectedClick =(e)=>{
    setSelected(e.target.value);
    console.log("handleSelectedClick")
  }


  /* 🍀js 0223.   filteredData 함수:
    위에 수집한 products, selected, query 변수들 데이터로 rendering

    상품 목록(products 배열), 선택한 카테고리(selected), 검색어(query)를 인수로 받습니다.
    먼저 filteredProducts 변수를 초기화합니다.

    검색어 필터링: 검색어(query)가 있을 경우, 상품 목록을 filteredItems 배열로 대체합니다. 
    이렇게 하면 검색어와 일치하는 상품만 남게 됩니다.

    선택한 필터 적용: 선택한 카테고리(selected)가 있을 경우, 해당 카테고리와 일치하는 상품만 남기고 나머지는 제거합니다. 
    여기서 filter 메서드를 사용하여 필터링 작업을 수행합니다.

    마지막으로 필터링된 상품들을 map 함수를 사용하여 컴포넌트(Card)로 렌더링합니다.
    filtering 끝나면 <product.js에 rendering함
  */

  const filteredData=(data_products, selected, query)=>{
    console.log(data_products)

    let filtered_Products = data_products;  

    // Filtering Input Items
    if (query) {
      
    }
    if (selected) {
      
    }



  }

  const result = filteredData(data_products, selected, query);


  return (
    <div>
      <div>Query: {query}</div>
      <Nav query={query} handleQueryChange={handleQueryChange} />
      <FilterBybutton handleSelectedClick={handleSelectedClick}/>
      <Sidebar handleSelectedChange={handleSelectedChange}/>

      {/*👉js 0223 */}
      <Products result={result} />
  

    </div>
  );
};

export default App;
