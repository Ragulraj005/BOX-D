import React,{useState,useRef } from 'react';

import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './GameSwiper.css';

import { EffectCoverflow ,Navigation,Autoplay} from 'swiper/modules';
import GameSlide from './GameSlide';

function GameSwiper({games}) {
    const[active,setActive] = useState(false);
    const videoRef = useRef(null);

    const handleToggleVideo =() =>{
      
      setActive(!active);

      if (!active && videoRef.current) {
        const videoElement = videoRef.current;
  
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      }
    };

  return (
    <Swiper
    effect={'coverflow'}
    grabCursor ={true}
    navigation = {true}
    loop = {true}
    centeredSlides ={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate:35,
      stretch:200,
      depth:250,
      modifier:1,
      slideShadows:true,
    }}
    autoplay ={{
      delay:7000,
      disableOnInteraction:false,

    }}
    modules={[EffectCoverflow,Navigation,Autoplay]}
    className="gameSwiper"
    >
      {
        games.map(game=>(
          <SwiperSlide key={game._id} >

    <GameSlide  
      game={game} 
      active={active} 
      toggleVideo={handleToggleVideo} />
          </SwiperSlide>
         
        ))
      }

    </Swiper>
  )
}

export default GameSwiper
