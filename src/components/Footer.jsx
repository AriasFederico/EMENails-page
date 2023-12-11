import { NavLink } from "react-router-dom"
import './Footer.css'

export function Footer () {


  return (
    <div className="Footer">
      <div className="width-footer">
        <div className="flex-footer">
          <NavLink to={'/'}>Atribuciones</NavLink>
          <NavLink>Contacto</NavLink>
        </div>
        <NavLink>Desarollado por Federico</NavLink>
      </div>
    </div>
  )
}