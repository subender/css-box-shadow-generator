import React from 'react'
import {BsGithub} from "react-icons/bs"
import  "./NavBarCss.css"

const NavBar = () => {
  return (
    <div>
      <div className='nav'>
        <h1 className='heading'>CSS Box Shadow Generator</h1>
        <a href="https://github.com/subender"><BsGithub className="icon"/></a>
      </div>
    </div>
    
  )
}

export default NavBar