import React from 'react'
import "./Hero.scss"
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="Text_Hero">
          <div className="Text">
             <h1>Powering the future of dYdX through community grants</h1>
          </div>
          <div className="text_btn">
               <button className='btn_Hero1'><NavLink className="btn_Hero_nav" to="/Discover">Discover RFPs</NavLink></button>
                <NavLink to="/Grand"> <button className='btn_Hero2'>Apply for grant</button></NavLink>
          </div>
          <div className="text_2">
              <div className="text_P">
                   <p>100+</p>
                   <p className='P_P'>projects funded</p>
              </div>
              <div className="text_P">
                   <p>$3+ milion</p>
                   <p className='P_P'>awarded</p>
              </div>
              <div className="text_P">
                   <p>400+ </p>
                   <p className='P_P'>projects funded</p>
              </div>
          </div>
    </div>
  )
}

export default Hero