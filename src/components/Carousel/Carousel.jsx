import  "./Carousel.scss";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import{useState, useEffect} from 'react'
import {  SwiperSlide } from "swiper/react";

export const Carousel=({props})=>{
  
    const[index, setIndex]=useState(0)
const [slidesPerView, setSlidesPerView] = useState(3);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
      setIndex(0); // wichtig! Reset bei Resize
    } else {
      setSlidesPerView(3);
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
    return(
        <>
        <div className="carousel">
       
        <button onClick={()=>setIndex( index>0? index-1:index)}> <TbArrowBigLeftLinesFilled style={{color:'#DA6763'}} /></button>
    
       { props.slice(index, index+slidesPerView).map((data, i)=>(
        <SwiperSlide key={i}>
        <img src={data.img} alt={data.name} className="skills-img"></img></SwiperSlide>
       ))
}
<button    onClick={()=>setIndex(props.length-slidesPerView>index? index+1:index)}><TbArrowBigRightLinesFilled   style={{color:'#DA6763'}}   /></button>
        </div>
       
        </>
    )
}