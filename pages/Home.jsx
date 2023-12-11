import './Styles-pages/Home.css'
import { ImagesHome } from "../src/components/ImagesHome"
import { MyTurns } from "../src/components/MyTurns"
import { Comments } from "../src/components/Comments"
import iconHome from "../src/assets/icons/icon-arrow-home.png"
import { NavLink } from 'react-router-dom'

export const Home = () => {

  return (
    <div className="Home" >
        <ImagesHome/>
        <MyTurns/>
      <div>
        <h4 className='title-comments'>Comentarios y valoraciones</h4>
        <div className="comments-container">
          <Comments 
          name={'Maria'}
          comment={'La verdad muy buena atencion y muy lindo lugar, recomiendo'}/>
          <Comments 
          name={'Florencia'}
          comment={'Atención impecable, el lugar es precioso y el servicio muy bueno'}/>
          <Comments 
          name={'Julieta'}
          comment={'La verdad muy buena atencion y muy lindo lugar, recomiendo'}/>
          <Comments 
          name={'Lucía'}
          comment={'La verdad muy buena atencion y muy lindo lugar, recomiendo'}/>
          <Comments 
          name={'Romina'}
          comment={'La verdad muy buena atencion y muy lindo lugar, recomiendo'}/>
        </div>
      </div>   

      <div className="btn-container">
        <NavLink to="/">
          <img src={iconHome} alt="" className='back-to-home-btn' />
        </NavLink>
      </div>
    </div>
  )
}