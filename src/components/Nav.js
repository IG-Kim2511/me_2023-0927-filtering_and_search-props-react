import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({handleInputChange,query}) => {
  return (
    <div>
        <section className="nav-container">
            <input type="text" className='search-input' onChange={handleInputChange}
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