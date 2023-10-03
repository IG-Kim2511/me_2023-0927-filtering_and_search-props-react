import React from 'react'
import "./FilterBybutton.css"

const FilterBybutton = ({handleSelectedClick}) => {

    const Btn_Obj  = [
        {
          value: "All Products",      
        },
        {
          value: "Nike",      
        },
        {
          value: "Adidas",      
        },
        {
          value: "Puma",      
        },
        {
          value: "Vans",      
        }, 
    ];
    
  return (
    <div id='FilterBybutton'>
        <h2>FilterBybutton</h2>        
        <div className="FilterBybutton-flex">
        {
            Btn_Obj.map((item, i) => (
            <button onClick={handleSelectedClick} value={item.value} className='btns' key={i}>
              {item.value}
            </button>
          ))
        }
        </div>   
    </div>
  )
}

export default FilterBybutton
