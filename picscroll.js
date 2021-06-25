
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"




// import Swiper core and required modules
import SwiperCore, {
  Keyboard,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Keyboard,Pagination,Navigation]);

const createpics=(prop)=>
{
        if(prop.pics==null){return; }
      console.log(prop.pics[0].thumbnails.large.url);
       return prop.pics.map( pic =>
           {
                return( <SwiperSlide><img src={pic.thumbnails.large.url} alt=""/></SwiperSlide>)
           }
        )
}
 const Picscroll =(prop)=>{

     console.log(prop.pics);

  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={30} keyboard={{
  "enabled": true
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  {
    createpics(prop)
  }

  </Swiper>
    </>
  )
}

export default Picscroll
