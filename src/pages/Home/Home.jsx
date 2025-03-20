import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

// CSS
import './home.scss';

// JS
import resizeListener from '../../script/functionResizeListener.js';

// Component
import Button from '../../components/button/Button'
import Newsletter from '../../components/newsletter/Newsletter'
import Logo2 from '../../components/logo/Logo2';

const SliderHeader = React.lazy(() => import('../../components/slider/SliderHeader'));

  const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [heightContent, setHeightContent] = useState({
      'hero': 0,
      'sectionIntroProduit': 0,
      'sectionDefilement': 0,
      'sectionTemps': 0,
      'sectionNouveau': 0,
      'section-huiles-essentielles': 0
    })

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    useEffect(() => {
    // Deux événements :
    // - au Scroll -> active la fonction handleScroll
    // - quand la fenêtre est redimensionné -> active la fonction handleResize
      window.addEventListener("scroll", handleScroll);
      
      const handleResize = () => resizeListener(heightContent, setHeightContent);
      window.addEventListener("resize", handleResize);
      handleResize(); // Exécuter une première fois au montage

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      };
    }, []);
   
  return (
    <div id="page-home">
        <Helmet>
          <title>Évasion - cosmétique & hygiène sensorielle</title>
          <meta name='description' content="Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France." />
        </Helmet>
        <section id="hero">
          <div className='container'>
            <div className={`border pre-anim ${scrollY < heightContent.hero ? 'border-scale-center' : ''}`}></div>
            <div className='header-logo'>
              <h1>Évasion</h1>
              <Logo2 />
              <h2 className='title-H'>Cosmétique sensorielle</h2>
            </div>
            <div className='header-button'>
              <Button name='Découvrir nos produits' lien='/shop' /> 
            </div>
            <div id="container-slider-gammes" className='header-pack'>
              <SliderHeader />
            </div>
          </div>
        </section>
        <section id="sectionIntroProduit" className='container-dark'>
          <div className='container container-grid'>
            <div className={`grid6 pre-anim ${scrollY > heightContent.hero/2 ? 'translateL' : ''}`}>
              <img src="../../public/assets/img/pack/gamme/GAMME-LAVANDE-750px.jpg"/>
            </div>
            <div className={`container-flex-texte grid3 pre-anim ${scrollY > heightContent.hero/2 ? 'translateR' : ''}`}>
              <h2>Nos produits</h2>
              <p>
                <span className='paragraphe-chapeau'>Plongez dans un univers où chaque soin devient une invitation au voyage.<br/></span>
                Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France. Parce que prendre soin de soi, c'est aussi s'offrir un moment d'évasion.
              </p>
              <Button name='Découvrir nos gammes' lien='/nos-gammes' className="button-white" />
            </div>
          </div>
        </section>
        <section id="sectionDefilement">
          <hr></hr>
          <div className='container-defilement'>
            <h2 className="title-XXH defilement">ÉVASION - COSMÉTIQUE SENSORIELLE - HUILES ESSENTIELLES</h2>
            <h2 aria-hidden="true" className="title-XXH defilement">ÉVASION - COSMÉTIQUE SENSORIELLE - HUILES ESSENTIELLES</h2>
          </div>
          <hr></hr>
        </section>
        <section id="sectionTemps">
          <div className='background'>
            <div className='background-image'></div>
            <div className='background-texte'></div>
          </div>
          <div className='container-grid container'>
            <div className='container-image-border grid5 container-dark'>
              <div className={`border pre-anim ${scrollY > (heightContent.sectionIntroProduit/5)*4 && scrollY < heightContent.sectionTemps ? 'border-scale-center' : ''}`}></div>
              <div className={`container-image image-zoom pre-anim ${scrollY > (heightContent.sectionIntroProduit/5)*4 && scrollY < heightContent.sectionTemps ? 'fade-in-element' : ''}`}>
                <img alt="Une femme qui se prélasse au soleil pour prendre du temps pour sois" src="../../assets/img/photos/femme-maillot-jaune-ete-1000px.jpg"/>
              </div>
            </div>
            <div className={`part-texte grid3 container-flex-texte pre-anim  ${scrollY > (heightContent.sectionIntroProduit/5)*4 && scrollY < heightContent.sectionTemps ? 'translateR' : ''}`}>
              <h2 className='title-XH'>Prenez le temps pour l’essentiel</h2>
              <p>
                <span className='paragraphe-chapeau'>Nos soins sont conçus pour vous accompagner dans cette quête de bien-être, en vous offrant des instants de plaisir et de sérénité. Car l'essentiel, c'est vous.<br/></span>
                Dans un quotidien effréné, Évasion vous invite à ralentir et à vous accorder un moment rien qu'à vous. Une douche aux senteurs de la Provence, une crème inspirée des rives corses... Chaque produit devient une bulle de douceur, un instant de reconnexion avec vous-même.
                S'accorder du temps, c'est aussi renouer avec des gestes simples, réapprendre à apprécier l'instant présent. Une application de crème aux effluves apaisants, un massage aux huiles essentielles bienfaitrices... Autant de rituels qui transforment la routine en un moment précieux, où l'esprit se libère et le corps se ressource.
              </p>
              <Button name='Lire la suite' lien='/huiles-essentielles'/>
            </div>
          </div>
        </section>
        <section id="sectionNouveau">
          <div className='container container-grid'>
            <div className='container-flex-texte grid1'>
              <h2>Nouveau</h2>
              <p>
                <span className='paragraphe-chapeau'>L’huile satinée aux huiles essentielles de fleurs d’oranger<br/></span>
                <span>Côte d'Azur</span>
                Laissez votre peau s'illuminer avec notre Huile Satinée inspirée des rivages ensoleillés de la Côte d'Azur. Riche en huile d'argan, en extraits de fleurs d'oranger et en vitamine E, elle nourrit intensément et laisse un fini soyeux sur votre peau. Son parfum envoûtant vous transporte instantanément sous le soleil méditerranéen.
              </p>
              <Button name="Pour l'adopter" lien='/shop'/>
            </div>
            <div className='grid5 container-image'>
              <img alt="" src="../../assets/img/pack/huile-satinee/HUILE-SATINE-3-EVASION-02-1000px.jpg"></img>
            </div>
            <div className='grid3'>
              <div className='container-image'>
                <img alt="" src="../../assets/img/pack/huile-satinee/HUILE-SATINE-2-EVASION-03-1000px.jpg"></img>
              </div>
              <div className='container-image'>
                <img alt="" src="../../assets/img/pack/huile-satinee/HUILE-SATINE-2-EVASION-02-1000px.jpg"></img>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionHuilesEssentielles" className='container-image-large'>
            <div className='container-image'>
              <img alt="" src="../../assets/img/photos/huiles-essentielles-2-1800px.jpg"></img>
            </div>
            <div className='container container-grid'>
              <div className='container-flex-texte grid5'>
                <h2 className='title-XH'>Huiles essentielles</h2>
                <Button name="En savoir plus" lien='/huiles-essentielles' className="button-white"/>
              </div>
            </div>
        </section>
        <Newsletter/>
    </div>
  )
}

export default Home