import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import supabase from "../../supabase.js"

// CSS
import './slider.scss'
import Button from '../button/Button';


const SliderGamme = () => {
    const [slides, setSlides] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchSlides = async () => {
          try{
            const {data, status, error} = await supabase
                                          .from("slideGamme")
                                          .select("*");
            console.log("Données récupérées depuis Supabase:", data);
            if (status === 200) {
                const sortedSlides = data.sort((a, b) => a.id - b.id); // Trie par ID croissant
                setSlides(sortedSlides);
            }        
            
          } catch(error) {
            console.log("Error fetching: ", error);
          }
        }
        fetchSlides()
        
    }, []);

    const composition1 = (img1, img2, img3, title) => {
        return (
            <>
                <div className='container-image'>
                    <img src={'../../'+img1+'.jpg'} alt={title} />
                </div>
                <div className='container-image'>
                    <div className='container-image'>
                        <img src={'../../'+img2+'.jpg'} alt={title} />
                    </div>
                    <div className='container-image'>
                        <img src={'../../'+img3+'.jpg'} alt={title} />
                    </div>
                </div>
            </>
        )
    }

    const composition2 = (img1, img2, img3, title) => {
        return (
            <>
                <div className='container-image'>
                    <div className='container-image'>
                        <img src={'../../'+img1+'.jpg'} alt={title} />
                    </div>
                    <div className='container-image'>
                        <img src={'../../'+img2+'.jpg'} alt={title} />
                    </div>
                </div>
                <div className='container-image'>
                    <img src={'../../'+img3+'.jpg'} alt={title} />
                </div>
            </>
        )
    }
    
    const getRealIndex = () => {
        if (sliderRef.current && sliderRef.current.innerSlider) {
            return sliderRef.current.innerSlider.state.currentSlide;
        }
        return 0; // Retourne 0 par défaut si `sliderRef` n'est pas prêt
    };
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
      };

  return (
    <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => {
            console.log(`Slide ${slide.title} (index ${index}) (active ${activeSlide})`);
            const isActive = index === activeSlide; 
            return (
                <div key={slide.id}  
                className={isActive ? 'active slide-child slide-' + slide.gamme  : 'slide-child slide-' + slide.gamme}>
                    <div className='container container-grid'>
                        <div className='container-flex-texte grid3'>
                            <h2>{slide.title}</h2>
                            <p><span className='paragraphe-chapeau'>{slide.chapeau}</span></p>
                            <p>{slide.paragraphe1}</p>
                            <p>{slide.paragraphe2}</p>
                            <Button name="Plongez dès maintenant !" lien={slide.lien}/>
                        </div>
                        <div className='container-board grid6'>
                            <div className='border'></div>
                            {(slide.id%2) === 0 ? composition1(slide.img1, slide.img2, slide.img3, slide.title) : composition2(slide.img1, slide.img2, slide.img3, slide.title) }
                        </div>
                    </div>
                </div>    
            )
        })}
    </Slider>
  )
}

export default SliderGamme

