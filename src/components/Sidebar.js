import React from 'react'
import "./Sidebar.css"

const Sidebar = ({handleSelectedChange}) => {

  /* 🦄
    console-handleChange 찍어보면 setSelectedCategory 가 나옴... 
    👉여기에서 set~을 해서 props 자식 컴포넌트인데도 불구하고, 상위컴포넌트에 데이터 전달할 수있는 것임
    
    input value onChange한때 handleChange function 실행
  */

  const category_Obj  = [
      {
        value: "Sneakers",
        title: "Sneakers",
        name : "test",
      },
      {
        value: "Flats",
        title: "Flats",
        name : "test",
      },
      {
        value: "Sandals",
        title: "Sandals",
        name : "test",
      },
      {
        value: "Heels",
        title: "Heels",
        name : "test",
      }
  ];

  const price_Obj  = [
      {
        value: 50,
        title: "$0 - 50",
        name : "test",
      },
      {
        value: 100,
        title: "Flats",
        name : "test",
      },
      {
        value: 150,
        title: "$100 - $150",
        name : "test",
      },
      {
        value: 200,
        title: "Over $150",
        name : "test",
      }
  ];


  return (
    <div id='Sidebar'>
      <main className="logo-container">
        <h1>🛒</h1>
      </main>

      {/* ----Sidebar ---- */}
      <main className="container">
        <h2 className="sidebar-title">Sidebar</h2>    
        <div>         
          <label className="sidebar-label-container">
            <input onChange={handleSelectedChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>     
          {
            category_Obj.map((i)=>(
              <label className="sidebar-label-container">
                <input onChange={handleSelectedChange} type="radio" value={i.value} name={i.name} />
                <span className="checkmark" ></span>
                {i.title}
              </label>
            ))
          }        
        </div>
      
      </main>

      {/* --- Price --- */}
      <main className="Price">
        <div className="ml">
         <h2 className="sidebar-title price-title">Price</h2>
         <label className="sidebar-label-container">
          <input onChange={handleSelectedChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
         </label>
         {
          price_Obj.map((i)=>(
            <label className="sidebar-label-container">
              <input onChange={handleSelectedChange} type="radio" value={i.value} name={i.name} />
              <span className="checkmark" ></span>
              {i.title}
            </label>
          ))
         } 

        </div>      
      </main>
    
    </div>
  )
}

export default Sidebar