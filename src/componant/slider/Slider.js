import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import user3 from "../../images/user3.jpg";
import user2 from "../../images/user2.jpg";
import user1 from "../../images/user1.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider=()=>{
  return(
    <div className='sw'>
        
<div className="slider-header" id="testimonials">
  
  <div className="container">
  <div >
  <h2 >Testimonials </h2>
  </div>
  <div className="header-container">
    <div className="header"></div>
  </div>
  
  <p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
    
      </div>
      
   <Swiper slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    
        <SwiperSlide>     <div className="same-prop">
  <img src={user3} alt=""  />
  <div>
<h3>Gordon Shaw</h3>
<p> Designer Digital</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe neque provident excepturi recusandae obcaecati ullam molestiae sequi rem facere, ea di</p>
</div>
</div></SwiperSlide>
        <SwiperSlide> <div> <div className="same-prop" >
  <img src={user2} alt="" />
  <div>
<h3>Steve Smith</h3>
<p>Digital Designer</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe neque provident excepturi recusandae obcaecati ullam molestiae sequi rem facere, ea di</p>
</div></div>
</div></SwiperSlide>
        <SwiperSlide><div className="same-prop" >
  <img src={user1} alt="" />
  <div>
<h3>John Michal</h3>
<p>Digital Designer</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe neque provident excepturi recusandae obcaecati ullam molestiae sequi rem facere, ea di</p>
</div>
</div></SwiperSlide>

      </Swiper>
    </div>
    </div>
  )
}
export default Slider