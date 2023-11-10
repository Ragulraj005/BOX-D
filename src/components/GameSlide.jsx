import React from 'react'
import {  SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
function GameSlide({game ,active, toggleVideo , setActive,videoRef}) {
 
  return (
  
    <div className="gameSlider">
     <img src={game.img} alt="Game Image"   />
     <div className={`video  ${active?'active':undefined}`}>
       <iframe
         width="1200"
         height="720"

        src={game.trailer} 
        title={game.title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
     </div>
     <div className="content">
       <h2>{game.title}</h2>
       <p>{game.description}</p>
       <div className="buttons">
         <a href="#" className="orderBtn">Order Now</a>
         <a href="#" className={`playBtn  ${active ?'active' :undefined}`} onClick={toggleVideo}>
           <span className='Pause'>
           <i className="bi bi-pause-fill"></i>
           </span>
           <span className='Play'>
           <i className="bi bi-play-fill"></i>
           </span>
         </a>
       </div>
     </div>
    </div>
 
  )
}

export default GameSlide
