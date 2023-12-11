import { NavLink } from "react-router-dom"
import './MyTurns.css';
import { useState } from "react";
import Arrow from '../assets/icons/icon-arrow.png'

export function MyTurns () {

  // crear un estado que... cuando exista un turno se elimine el div 'container-turns'

  const [turnos, setTurnos] = useState(false)

  return (
    <div className="MyTurns">
      <div className="advertising">
        <h2>Manicuría, peluqueria y bijouterie. Todo en un mismo lugar!</h2>
        <p>Te esperamos en <strong>EMENails</strong>, donde tu belleza es nuestra prioridad</p>
        <p>Consulta nuestros precios y pedí tu turno!</p>
        <div className="container-arrow-link">
          <img src={Arrow} alt="" className="arrow"/>
          <NavLink to='/Prices' className='diary-link-mobile-prices' >PRECIOS</NavLink>
        </div>
        <div className="separator"></div>
      </div>

      <div className="my-turns-container">
        <h3>Mis turnos</h3>
        { turnos
          ? <div className="turns">Componente con info de los turnos</div>          
          : <div className="turns">
              <p>Sin turnos agendados</p>
                <NavLink to='/Turns' className='myturns-btn-turns'>Solicitar un turno</NavLink>
            </div>
        }
      </div>
    </div>
  )
}
