import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";

// CSS
import './slider.scss'
import Button from '../button/Button';

const slides = [
    { id: 0, 
        title: "Provence", 
        gamme: "provence", 
        chapeau: "Un souffle de sérénité au cœur de la nature.", 
        paragraphe1: "Redécouvrez la douceur des champs de lavande et des oliveraies baignées de soleil. Avec des notes apaisantes de lavande, de thym et de romarin, la gamme Provence vous enveloppe d'une senteur chaleureuse et relaxante.", 
        paragraphe2: "Ces soins puisent leur essence dans la richesse de cette terre emblématique, pour offrir à votre peau une véritable pause ressourçante. Grâce aux propriétés régénérantes et apaisantes des plantes provençales, votre peau retrouve souplesse et éclat, tandis que votre esprit s'évade vers les paysages ensoleillés du sud de la France.", 
        lien: "/shop", 
        img1: "../../public/assets/img/gammes/gamme-img-provence-1.jpg", 
        img2: "../../public/assets/img/gammes/gamme-img-provence-2.jpg",
        img3: "../../public/assets/img/gammes/gamme-img-provence-3.jpg" 
    },
    { id: 1, 
        title: "Corse", 
        gamme: "corse", 
        chapeau: "L'intensité sauvage du maquis dans chaque goutte.", 
        paragraphe1: "Plongez au cœur du maquis corse avec des senteurs sauvages et authentiques : immortelle, myrte et agrumes. Des soins gorgés de soleil pour une peau régénérée et une énergie retrouvée.", 
        paragraphe2: "Chaque application est une immersion dans l’âme insulaire de la Corse, où la nature brute et préservée offre des ingrédients puissants et revitalisants. L’immortelle, fleur emblématique aux vertus anti-âge, associée aux agrumes vivifiants, tonifie la peau et éveille les sens pour un instant de bien-être intense.", 
        lien: "/shop", 
        img1: "../../public/assets/img/gammes/gamme-img-corse-1.jpg", 
        img2: "../../public/assets/img/gammes/gamme-img-corse-2.jpg",
        img3: "../../public/assets/img/gammes/gamme-img-corse-3.jpg" 
    },
    { id: 2, 
        title: "Côte d’Azur", 
        gamme: "coteazur", 
        chapeau: "Un éclat de soleil pour votre peau.", 
        paragraphe1: "Cap sur la douceur de vivre de la Côte d'Azur avec des notes fraîches et lumineuses d'agrumes, de fleurs d'oranger et de jasmin. Des soins ensoleillés pour une peau douce et revitalisée.", 
        paragraphe2: "Inspirée par la Méditerranée, cette gamme capte toute la fraîcheur et la luminosité de la région. Les extraits de fleurs d’oranger apportent une touche de douceur réconfortante, tandis que les agrumes vivifiants éveillent les sens. Une véritable invitation à une escapade en bord de mer, entre ciel azur et parfums enivrants.", 
        lien: "/shop", 
        img1: "../../public/assets/img/gammes/gamme-img-coteazur-1.jpg", 
        img2: "../../public/assets/img/gammes/gamme-img-coteazur-2.jpg",
        img3: "../../public/assets/img/gammes/gamme-img-coteazur-3.jpg" 
    },
    { id: 3, 
        title: "Bretagne", 
        gamme: "bretagne", 
        chapeau: "L'énergie de l'océan au service de votre peau.", 
        paragraphe1: "Respirez l'air marin et laissez-vous emporter par la fraîcheur vivifiante des embruns. Inspirée de la mer et des algues bretonnes, cette gamme hydrate et tonifie la peau pour une sensation de pureté intense.", 
        paragraphe2: "Grâce aux propriétés reminéralisantes des algues et à la force des éléments marins, chaque soin apporte un boost d’hydratation et de vitalité. Offrez à votre peau un bain d’énergie fraîche et ressourçante, comme une promenade revigorante sur les côtes sauvages de la Bretagne.", 
        lien: "/shop", 
        img1: "../../public/assets/img/gammes/gamme-img-bretagne-3.jpg", 
        img2: "../../public/assets/img/gammes/gamme-img-bretagne-2.jpg",
        img3: "../../public/assets/img/gammes/gamme-img-bretagne-1.jpg" 
    }
  ];


const SliderGamme = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const composition1 = (img1, img2, img3, title) => {
        return (
            <>
                <div className='container-image'>
                    <img src={img1} alt={title} />
                </div>
                <div className='container-image'>
                    <div className='container-image'>
                        <img src={img2} alt={title} />
                    </div>
                    <div className='container-image'>
                        <img src={img3} alt={title} />
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
                        <img src={img1} alt={title} />
                    </div>
                    <div className='container-image'>
                        <img src={img2} alt={title} />
                    </div>
                </div>
                <div className='container-image'>
                    <img src={img3} alt={title} />
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
        onInit: () => setActiveSlide(0), 
        beforeChange: (oldIndex, newIndex) => {
            console.log("Avant transition - Index réel :", getRealIndex());
            setActiveSlide(newIndex);
        },
        afterChange: (current) => {
            console.log("Après transition - Index réel :", getRealIndex());
            setActiveSlide(current);
        },
      };

    useEffect(() => {
        if (sliderRef.current) {
            const realIndex = sliderRef.current.innerSlider.state.currentSlide;
            console.log("Vrai index affiché :", realIndex);
            setActiveSlide(realIndex);
        }
    }, [activeSlide]);


  return (
    <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => {
            //console.log(`Slide ${slide.title} (index ${index}) (id ${slide.id}) : active = ${index === activeSlide}`);
            return (
                <div key={slide.id}  
                className={index === activeSlide ? 'active slide-child slide-' + slide.gamme : 'slide-child slide-' + slide.gamme}>
                    <div className='container container-grid'>
                        <div className='display-flex-texte grid3'>
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

