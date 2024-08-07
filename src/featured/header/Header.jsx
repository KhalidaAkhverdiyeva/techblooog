import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



const Header = () => {
  return (

    <Header>
       <div></div>
      <div className='flex'>
        <button>SUBSCRIBE</button>
        <div><FaRegMoon /></div>
        <div><IoSearch /></div>
      </div>
    </Header>
   
     

    
  )
}

export default Header