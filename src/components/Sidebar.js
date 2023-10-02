import React from 'react'
import "./Sidebar.css"

const Sidebar = ({handleChange}) => {

  /* 🦄
    console-handleChange 찍어보면 setSelectedCategory 가 나옴... 
    👉여기에서 set~을 해서 props 자식 컴포넌트인데도 불구하고, 상위컴포넌트에 데이터 전달할 수있는 것임
    
    input value onChange한때 handleChange function 실행
  */

    const categoryObj  = [
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


  return (
    <div id='Sidebar'>
      <main className="logo-container">
        <h1>🛒</h1>
      </main>

      {/* ----Category ---- */}
      <main id="Category">
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label htmlFor="" className='sidebar-label-container'>
            <input type="text" />
            <span></span>all
          </label>        
          {
            categoryObj.map((i)=>(
              <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value={i.value} name={i.name} />
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