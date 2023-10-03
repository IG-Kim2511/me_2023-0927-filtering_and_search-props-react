import React from 'react'
import "./Nav.css"

import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({handleQueryChange,query}) => {
  return (
    <div id='nav'>
        <section className="nav-container">
            <input type="text" className='search-input' onChange={handleQueryChange}
            value={query}
            placeholder='nav input'/>
        </section>
        <section className="profile-container">
            <a href="#">
                <FiHeart className="nav-icons" />
            </a>
            <a href="">
                <AiOutlineShoppingCart className="nav-icons" />
            </a>
            <a href="">
                <AiOutlineUserAdd className="nav-icons" />
            </a>
        </section>
    
    </div>
  )
}

export default Nav