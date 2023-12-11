import { NavLink } from "react-router-dom"
import './ImagesHome.css'


export function ImagesHome () {
  return (
    <div className="images-diary">
      <div className="banner manicure">
        <NavLink to='/Turns' className='diary-link-mobile' >Agendar</NavLink>
        <p className="banner-p">Servicio de manicuría</p>
      </div>
      <div className="carousel">
        <div className="banner feet">
          <NavLink to='/Turns' className='diary-link-mobile' >Agendar</NavLink>
          <p className="banner-p carousel-p">Belleza de pies</p>
        </div>
        <div className="banner hair">
          <NavLink to='/Turns' className='diary-link-mobile' >Agendar</NavLink>
          <p className="banner-p carousel-p">Peluquería</p>
        </div>
        <div className="banner smoothing">
          <NavLink to='/Turns' className='diary-link-mobile' >Agendar</NavLink>
          <p className="banner-p carousel-p">Alisados</p>
        </div>
        <div className="banner bijouterie">
          <NavLink to='/About' className='diary-link-mobile' >Visitar</NavLink>
          <p className="banner-p carousel-p">Bijouterie</p>
        </div>
      </div>
    </div>
  )
}