import React from "react"
import "./Landing.css"
import img_1 from "../../assets/carousel_1.jpg"
import img_2 from "../../assets/carousel-2.jpg"

// interface
interface arr {
  img : string ;
  text : string ;
}
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/// 
import { motion } from "framer-motion";
const Landing:React.FC = () => {
    let LandingData : arr[] = [{img : img_1, text: "BUILD YOUR BODY STRONG WITH GYMSTER" },
                                {img : img_2, text: "GROW YOUR STRENGTH WITH OUR TRAINERS" },]
  const animations = {
  hidden : {y : 100 , opacity : 0},
  visible : {y : 0 , opacity : 1}
   }
    
  return (
    <div className="landing " id="landing">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {LandingData.map((elm : arr) => {
        return <SwiperSlide>
          <div className="slide-content position-relative">
            <img src={elm.img} className="" alt="" />
            <motion.div className="text position-absolute">
              <motion.p className=""
              variants={animations}
              initial= "hidden"
              animate= "visible"
              transition={{duration : 0.4, delay: 0.6, type: "spring"}}
              >BEST GYM CENTER</motion.p>
              <motion.h1
              variants={animations}
              initial= "hidden"
              animate= "visible"
              transition={{duration : 0.4, delay: 0.9, type: "spring"}}
              >{elm.text}</motion.h1>
              <motion.div className="btns mt-5"
              variants={animations}
              initial= "hidden"
              animate= "visible"
              transition={{duration : 0.4, delay: 1.2, type: "spring"}}
              >
                <a className="me-4 px-4 py-2 rounded one" href="">Join Us</a>
                <a className="px-4 py-2 rounded two" href="">Contact Us</a>
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
    </div>
  )
}

export default Landing