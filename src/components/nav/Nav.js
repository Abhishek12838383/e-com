import React from 'react'
import './Nav.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { useState } from 'react';
// import Detail from '../productdetail/Detail';

const Nav = (props) => {

  
  return (
    <div className='nav'>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
      </div>

<div  className="input">
    <input value={props.search} onChange={props.handlechange}   type="text" placeholder='Search' />
</div>

<div className="display">
<div onClick={props.showcart} className="cart">
<MdOutlineShoppingCart fontSize='20px'  color='white'/>
<span>{props.count}</span>
</div>
<div className="login">
<CiLogin fontSize='20px' color='white' />

</div>
</div>
    </div>

  
  )
}

export default Nav;

