import comillas from '../assets/icons/icon-coments.png'
import user from '../assets/icons/icon-user.png'
import './Comments.css'
export function Comments ({name, comment}) {

  return(
    <div className="Comments">
      <div className="Comments-item">
        <img src={comillas} alt="" className='icon-comillas'/>
        <p className='user-comment'>{comment}</p>
        <div className="user-container">
          <img src={user} alt="" className='icon-user'/>
          <p className='username'>{name}</p>
        </div>
      </div>
    </div>
  )
}