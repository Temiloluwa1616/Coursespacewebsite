import React from "react"
import react from '../assets/react.svg'
import { Menu } from "./Menu"
import './Rnavbar.css'
import {useState}from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosCloseCircle} from 'react-icons/io'
import SignUpButton from "./SignUpButton"
import {Link} from 'react-router-dom'

function Rnavbar(){
    const [clicked, setClicked] = useState(false)

    function handleclicked(){
        setClicked(!clicked)
    }
    
    return(
      <nav className="Navbaritems">
            <h1 className="navbar-logo">NavBar
                <img className="fa-react" src={react} alt="" />
            </h1>
            <div className="menu-icon" onClick={handleclicked}>
                   {clicked ? <GiHamburgerMenu style={{color:'white'}} /> : <IoIosCloseCircle style={{color:'white'}}/>}
            </div>
            <ul className={clicked ?   "nav-menu" : "nav-menu active"} >
                {Menu.map((item, index)=>{
                     return(
                        <li key={index}><a className={item.cNames} href={item.url}>
                            {item.title}
                            </a>
                            
                            </li>
                            
                )
                })}
               </ul>
               <SignUpButton  />

               
      </nav>
    )
}

export default Rnavbar