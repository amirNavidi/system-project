import React, { useState , useEffect } from 'react';
import { image } from '../data/imgData';
import styles from "../styles/slider.module.css"

// Icons
import * as Icon from 'react-bootstrap-icons';





const SimpleSlider = ({slider}) => {
  const [current , setCurrent] =useState(0);
  const length=slider.length;

 setTimeout(() => {
  nextSlide()
 }, 4000);

  const nextSlide=()=>{
    setCurrent(current === length-1 ? 0 :current+1)
   
  }

  const prevSlide=()=>{
     setCurrent(current === 0 ? length-1 :current-1)
  }

  // console.log(current);


  if (!Array.isArray(slider) || slider.length <=0){
        return null;
  }
  return (
    <section c className={`col-12 ${styles.sliderParent}`}>
      <Icon.ChevronRight className={styles.rightChevron} onClick={()=>nextSlide()}/>
      <Icon.ChevronLeft    className={styles.leftChevron}  onClick={prevSlide} />
       {
          image.map((slider ,index)=>{
          return (
            <div
              className={` ${styles.innerParent}`}
              key={index}>
                {index ===current &&(
                  <img   className={styles.img} src={slider.img} alt="slider" />
                ) }
               </div>
          )
           })
        }
    </section>
  );
};

export default SimpleSlider;