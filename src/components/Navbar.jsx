import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

import iconoEmenails from '../assets/icons/iconEMENails.png'
import burguer from '../assets/icons/burguer-mobile.png'
import burguerX from '../assets/icons/burguer-mobile-X.png'

import wsp from '../assets/icons/icon-wsp.png'
import ig from '../assets/icons/icon-ig.png'
import fb from '../assets/icons/icon-fb.png'



export const Navbar = () => {

  const [burguerState, setBurguerState] = useState(false);

  const handleShowMenu = () => {
    setBurguerState(!burguerState);
  }

  const hiddenMenu = () => {
    setBurguerState(false)
  }

  return (
    <div className="Navbar">
      <div className="menus-mobile">
        <div className="menu">
          <img src={burguerState ? burguerX : burguer} alt="EMENAILS" className="icon-burguer" onClick={handleShowMenu} />

            <NavLink to='/'><h1 className="title-h1">EMENAILS</h1></NavLink>
            <NavLink to='/' onClick={hiddenMenu}>
              <img src={iconoEmenails}
                alt="EMENAILS"
                className="icon-emenails"
              />
            </NavLink>
            
        </div>

        <div className={ burguerState ? 'menu-enable' : 'menu-disable'}>
          <div className="links-social-mobile">
            <a href="https://api.whatsapp.com/send?phone=2214547130"><img src={wsp} alt="" 
            className="icon-social"/></a>
            <a href="https://www.facebook.com/emenails.25"><img src={fb} alt="" 
            className="icon-social"/></a>
            <a href="https://www.instagram.com/emenails25/"><img src={ig} alt="" 
            className="icon-social"/></a>
          </div>


          <div className="links-page-mobile">
            <NavLink to='/' className='links-page'
            onClick={hiddenMenu}>INICIO</NavLink>
            <NavLink to='/Turns' className='links-page'
            onClick={hiddenMenu}>TURNOS</NavLink>
            <NavLink to='/Prices' className='links-page'
            onClick={hiddenMenu}>PRECIOS</NavLink>
            <NavLink to='/About' className='links-page'
            onClick={hiddenMenu}>SOBRE EMENAILS</NavLink>
          </div>
        </div>
      </div>


      <div className="menus-pc">
        <div className="menu-pc">
          <div className="icon-title">
            <NavLink to='/'>
              <img src={iconoEmenails}
                alt="EMENAILS"
                className="icon-emenails"
              />
            </NavLink>
            <NavLink to='/'><h1 className="title-h1">EMENAILS</h1></NavLink>
          </div>
        

          <div className="links-nav-social">
            <div className="links-page-pc">
              <NavLink to='/' className='links-page-pc'
              onClick={hiddenMenu}>INICIO</NavLink>
              <NavLink to='/Turns' className='links-page-pc'
              onClick={hiddenMenu}>TURNOS</NavLink>
              <NavLink to='/Prices' className='links-page-pc'
              onClick={hiddenMenu}>PRECIOS</NavLink>
              <NavLink to='/About' className='links-page-pc'
              onClick={hiddenMenu}>SOBRE EMENAILS</NavLink>
            </div>

            <div className="links-social-pc">
                <a href=""><img src={wsp} alt="" 
                className="icon-social-pc"/></a>
                <a href=""><img src={fb} alt="" 
                className="icon-social-pc"/></a>
                <a href=""><img src={ig} alt="" 
                className="icon-social-pc"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}