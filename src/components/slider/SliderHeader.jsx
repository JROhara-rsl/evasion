import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import supabase from "../../supabase.js"
import { useMouse } from "@uidotdev/usehooks";
import { Link } from 'react-router';

// CSS
import './slider.scss'
import Button from '../button/Button';

const SliderHeader = () => {
    const [produits, setProduits] = useState([]);
    const [formats, setFormats] = useState([500, 250]);
    const [mouse, ref] = useMouse();
    const sliderRef = useRef(null);

    const xIntersecting = mouse.elementX > (screen.width/6) && mouse.elementX < ((screen.width/4)*2);
    const yIntersecting = mouse.elementY >  (screen.height/5) && mouse.elementY < ((screen.height/5)*4);
    const isIntersecting = xIntersecting && yIntersecting;
    
    useEffect(() => {
        const fetchItem = async () => {
          try{
            const {data, status, error} = await supabase
                                          .from("produits")
                                          .select("*")
                                          .in("format", [formats]);
            if(status === 200) {
              const dataSort = data.sort(() => 0.5 - Math.random()); // Trie par ID croissant
              setProduits(dataSort);
            }        
                
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
        autoplaySpeed: 3000,
        pauseOnHover: true
      };

  return (
    <div ref={ref}>
      <Slider {...settings} ref={sliderRef}>
          {produits.map(slide => (
              <Link to={'/shop/item/'+slide.categorieId+'/'+slide.uuid} key={slide.id} className='slide-child'>
                  <div className={isIntersecting ? "active bandeau" : "bandeau"} style={{ left: (mouse.elementX-250), top: (mouse.elementY-150) }} >
                    <h4>{slide.categorie}</h4>
                    <hr></hr>
                    <span>{slide.gamme}</span>
                    <span>{slide.format}</span>
                  </div>
                  <img src={`${import.meta.env.BASE_URL}/assets/img/'+slide.img2+'-1200px.png`}  alt={slide.name} className='floating-in-element' />
              </Link>
          ))}
      </Slider>
    </div>
  )
}

export default SliderHeader
