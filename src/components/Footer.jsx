import { NavLink } from "react-router-dom"
import './Footer.css'

export function Footer () {


  return (
    <div className="Footer">
      <div className="width-footer">
        <div className="flex-footer">
          <NavLink to={'/'} className='link-footer' >Atribuciones</NavLink>
          <NavLink className='link-footer' >Contacto</NavLink>
        </div>
        <NavLink className='link-footer' >Desarollado por F.A</NavLink>
      </div>
    </div>
  )
}