import React from 'react'
import logo from '../assets/gweccc.png'

import '../App.css'
function Header() {
  return (
    <div className='logoContainer' >
     <img  src={logo} alt="logo" />
    </div>
  )
}

export default Header