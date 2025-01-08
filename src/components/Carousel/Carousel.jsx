import  "./Carousel.scss";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import{useState} from 'react'
import {  SwiperSlide } from "swiper/react";

export const Carousel=({props})=>{
  
    const[index, setIndex]=useState(0)


    return(
        <>
        <div className="carousel">
       
        <button onClick={()=>setIndex( index>0? index-1:index)}> <TbArrowBigLeftLinesFilled style={{color:'#DA6763'}} /></button>
    
       { props.slice(index, index+3).map((data, i)=>(
        <SwiperSlide key={i}>
        <img src={data.img} alt={data.name} className="skills-img"></img></SwiperSlide>
       ))
}
<button    onClick={()=>setIndex(props.length-3>index? index+1:index)}><TbArrowBigRightLinesFilled   style={{color:'#DA6763'}}   /></button>
        </div>
       
        </>
    )
}