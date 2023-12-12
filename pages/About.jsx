import '../pages/Styles-pages/About.css'
import iconEmail from '../src/assets/icons/icon-email.png'
import iconTel from '../src/assets/icons/icon-tel.png'

export const About = () => {
  return (
    <div className='About'>
      <h1 className='title-about'>Sobre EMENails</h1>

      <div className="paragraph-about">
        <p>Tu lugar de confianza para el cuidado integral de tu belleza. Soy Marcerla, especialista en servicios de uñas y peluquería</p>
        <p>En mi salón, vas a encontrar un ambiente acogedor donde te voy a brindar cortes de cabello simple y tratamientos capilares rejuvenecedores para resaltar tu belleza natural</p>
        <p>Además, mis servicios de uñas te van a prmitir disfrutar de diseños creativos y un cuidado impecable para tus manos</p>
      </div>

      <div className="image-links">
        <div className="image-emenails"></div>
        <div className="links-flex">
          <div className="contactotitle">
            <h3>Contacto</h3>
            <div className="email">
              <img src={iconEmail} alt="" className='icon-email'/>
              <a href="#" className='link-email'>Aliano.marcela@gmail.com</a>
            </div>
            <div className="tel">
              <img src={iconTel} alt="" className='icon-tel'/>
              <a href="#" className='link-tel'>221-4547130</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}