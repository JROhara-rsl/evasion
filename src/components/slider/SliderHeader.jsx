import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import supabase from "../../supabase.js"

// CSS
import './slider.scss'
import Button from '../button/Button';

const SliderHeader = () => {
    const [produits, setProduits] = useState([]);
    const [formats, setFormats] = useState([500]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchItem = async () => {
          try{
            const {data, status, error} = await supabase
                                          .from("produits")
                                          .select("*")
                                          .in("format", [formats]);
            if(status === 200) setProduits(data)       
            console.log(data);
                
          } catch(error) {
            console.log("Error fetching: ", error);
          }
        }
        fetchItem()
      }, []);
      
      var settings = {
        dots: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <Slider {...settings} ref={sliderRef}>
        {produits.map((slide, index) => {
            <div key={slide.id}>
                <img src={'../../'+slide.img2+'.jpg'} alt={slide.name} />
            </div>
        })}
    </Slider>
  )
}

export default SliderHeader