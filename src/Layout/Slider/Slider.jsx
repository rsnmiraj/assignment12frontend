import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import $ from 'jquery';
import { EffectFade, Navigation, Pagination } from 'swiper';
 
const Slider = ({children}) => {
  const [sliderData, setSliderData] = useState([
    {
      id:4,
    url:"https://i.ibb.co/FKDYBfB/john-matychuk-g-UK3l-A3-K7-Yo-unsplash.jpg"
  },
    {
      id:2,
      url:  "https://i.ibb.co/fYFsHgY/david-lusvardi-d-Wc-Uncxoc-QY-unsplash.jpg" ,
    },{
    id:1,
  url: "https://i.ibb.co/Bqx3y4m/caught-in-joy-Puk-ZSAi-K5o-unsplash.jpg"  
  },

{
  id:3,
  url:  "https://i.ibb.co/yS0DckZ/dolo-iglesias-z9z6u1rn7s-Y-unsplash.jpg"   }]);
  const [currentSlider, setCurrentSlider] = useState(0); 
  const [loading, setLoading] = useState(true);

 
 


 
    return (
        <>
       {children}
       <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper  h-[350px] md:h-[500px]"
      >



{sliderData.map(e=>{
  return <>
   <SwiperSlide key={e.id}>
          <img className='object-cover' src={e.url} />
        </SwiperSlide>
  </>
})}

 
      </Swiper>

        </>
    );
}

export default Slider;
