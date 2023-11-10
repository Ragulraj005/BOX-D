import React,{useContext} from 'react';
import './Header.css';

import App, { AppContext } from '../App';
import UserImg from '../images/UserImg2.jpg'
function Header({ toggleActive}) {
  const {library,bag}  = useContext(AppContext)
  return (
    <header>
      <a href="#" className="Menu" onClick={toggleActive} >
      <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
        <i className="bi bi-heart"></i>
        <span className='like'>{library.length}</span>
        </a>
        <a href="#" className="icon">
        <i className="bi bi-bag"></i>
        <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#" ><img src={UserImg} alt="User Image" /></a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
