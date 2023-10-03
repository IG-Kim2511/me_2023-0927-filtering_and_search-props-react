import React from 'react'
import "./FilterBybutton.css"

const FilterBybutton = ({handleClick}) => {

    const Btn_Obj  = [
        {
          value: "",      
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
            <button onClick={handleClick} value={item.value} className='btns' key={i}>
              {item.value}
            </button>
          ))
        }
     
        
        </div>   
    </div>
  )
}

export default FilterBybutton


// <button onClick={onClickHandler} value={value} className="btns">
// {title}
// </button>