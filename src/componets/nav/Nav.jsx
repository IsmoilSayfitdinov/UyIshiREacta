import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.scss"
import imgLogo from "../../assets/Logo.png"

function Nav() {
  return (
    <nav>
        <div className="nav_block">
             <div className="nav_main">
         <div className="Navlog">
             <img src={imgLogo} alt="" />
         </div>
        <ul>
          <li> 
              <NavLink className={({isActive})=> isActive ? "avtive":"link"} to="/">Home</NavLink>
          </li>
            <li>
                 <NavLink className={({isActive})=> isActive ? "avtive":"link"} to="/Discover">Discover initiatives</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ? "avtive":"link"} to="/Grand">Grand</NavLink>
            </li>
            <li>
               <NavLink className={({isActive})=> isActive ? "avtive":"link"} to="/Fun">Fundend</NavLink>
            </li>
              <NavLink className="Qaaa" to={"/Grand"} ><button className="btn_Nav">Apply for grant</button></NavLink>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav