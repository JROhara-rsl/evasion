import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { useMouse } from "@uidotdev/usehooks";

// JS
import resizeListener from '../../script/functionResizeListener.js';

// Component
import Newsletter from '../../components/newsletter/Newsletter';
import Button from '../../components/button/Button'

const HuilesEssentielles = () => {
  const [mouse, ref] = useMouse();
  const [scrollY, setScrollY] = useState(0);
  const [heightContent, setHeightContent] = useState({
        'sectionHeaderHuile': 0,
        'sectionHeaderTexte': 0,
        'sectionEvader': 0,
        'sectionCitation': 0,
        'sectionEngagements': 0,
        'sectionHuilesEssentielles': 0,
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
    <div id="page-huiles-essentielles">
        <title>Évasion - Laboratoire d'huiles essentielles</title>
        <meta name='description' content="Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence." />
      <div id="sectionHeaderHuile"> 
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">
          <circle cx="100" cy="150" r="57" id="circle" transform="rotate(-90,100,100)" />  
        </svg>
        <div className='container-image' ref={ref}>
          <img alt="" src="../../assets/img/photos/pipette2.png"  style={{ top: (-mouse.elementY/40), left: (10-mouse.elementX/40) }}></img>
        </div>
      </div>
      <section id="sectionHeaderTexte">
        <div className='container container-grid'>
          <div className='container-flex-texte grid5'>
            <h1 className='title-XXH'>Huiles essentielles</h1>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,160L80,176C160,192,320,224,480,250.7C640,277,800,299,960,272C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
      <section id="sectionEvader" className="container-dark">
        <div className='container container-grid'>
          <div className={`container-image-border grid4 pre-anim ${scrollY > heightContent.sectionHeaderHuile/2 && scrollY < heightContent.sectionHuilesEssentielles ? 'translateL' : ''}`}>
            <div className='border border-scale-center'>
            </div>
            <div className='container-image image-zoom'>
              <img alt="Une femme qui se prélasse au soleil pour prendre du temps pour sois" src="../../assets/img/photos/photo-nature-1000px.jpg"/>
            </div>
          </div>

          <div className={`container-flex-texte grid5 pre-anim ${scrollY > heightContent.sectionHeaderHuile/2 && scrollY < heightContent.sectionHuilesEssentielles ? 'translateR' : ''}`}>
            <h2 className='title-XH' >S’évader un moment</h2>
            <p><span className='paragraphe-chapeau'>Prendre soin de soi, c’est aussi s’accorder le luxe de ralentir, de fermer les yeux et de respirer profondément</span></p>
            <p>Un parfum, une texture, une sensation... et vous voici transporté(e) en Bretagne, sur la Côte d'Azur ou au cœur du maquis corse. Nos soins sont pensés pour vous offrir une expérience sensorielle unique, inspirée des plus belles régions françaises.</p>
            <p>Chaque produit est une invitation au voyage, un rituel qui transforme l’ordinaire en un instant précieux. Une crème aux senteurs de lavande évoque une balade au cœur des champs ensoleillés, une huile aux agrumes réveille les souvenirs d’une escapade sur la Riviera... Laissez-vous porter par ces instants d’évasion et ressentez pleinement le plaisir du moment présent.</p>
            <p>Nos soins vous accompagnent dans cette quête de bien-être en vous offrant un moment suspendu, où seuls comptent les sensations et le plaisir des sens. Faites une pause, laissez-vous emporter, et savourez chaque instant.</p>
            <Button name='Découvrir nos gammes' lien='/nos-gammes' class="button-white" />
          </div>
        </div>  
      </section>
      <section id="sectionCitation" className='container-white'>
        <div className={`container container-grid pre-anim ${scrollY > heightContent.sectionHeaderHuile && scrollY < heightContent.sectionHuilesEssentielles ? 'translateT' : ''}`}>
          <h3 className='title-XH grid8 hightlight-text'><mark>Plongez</mark> dans un univers où chaque soin devient une invitation au <mark>voyage</mark>.</h3>
          <hr className='grid2c'></hr>
          <p className='grid8'>Évasion vous propose des produits cosmiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France.</p>
        </div>
      </section>
      <section id="sectionEngagements">
        <div className='container-image'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">
            <circle cx="40" cy="150" r="40" id="circle" transform="rotate(-90,100,100)" />  
          </svg>
          <img alt="Fiole d'huile essentielle" src="../../assets/img/photos/fiole-900px.png" 
              className={`pre-anim ${scrollY > heightContent.sectionHeaderTexte && scrollY < heightContent.sectionEngagements ? 'translateT' : ''}`}></img>
        </div>
        <h3 className='title-XXH'>Nos engagements</h3>
        <div id="container-engagements" className='container'>
          <div className='container-engagements'>
            <img alt="picto arbres" src="../../assets/picto/picto-tree.svg"></img>
            <p><strong>Un engagement RSE fort : </strong>nous participons activement à la protection de l'environnement et soutenons les producteurs locaux.</p>
          </div>
          <div className='container-engagements'>
            <img alt="picto arbres" src="../../assets/picto/picto-list.svg"></img>
            <p><strong>Des compositions épurées : </strong>nous utilisons seulement l'essentiel pour garantir l'efficacité et la tolérance de nos produits.</p>
          </div>
          <div className='container-engagements'>
            <img alt="picto arbres" src="../../assets/picto/picto-pack.svg"></img>
            <p><strong>Des packagings responsables  : </strong>réduction du plastique, utilisation de plastique 100% recyclé.</p>
          </div>
          <div className='container-engagements'>
            <img alt="picto arbres" src="../../assets/picto/picto-nature.svg"></img>
            <p><strong>Des formules naturelles : </strong>au minimum 90% d'ingrédients d'origine naturelle.</p>
          </div>
        </div>
      </section>
      <section id="sectionHuilesEssentielles" className='container-image-large'>
        <div className='container-image'>
          <img alt="Application d'huile essentielles sur des mains" src="../../assets/img/photos/huiles-essentielles-2-1800px.jpg"></img>
        </div>
        <div className='container container-grid'>
          <div className={`container-flex-texte container-white grid4 pre-anim ${scrollY > heightContent.sectionHeaderTexte ? 'translateT' : ''}`}>
            <h2 className='title-XH'>Savoir-faire d'excellence</h2>
            <p><span className='paragraphe-chapeau'>L'excellence au service de votre bien-être.</span></p>
            <p>Nos produits sont le fruit d'un savoir-faire unique, associant naturalité et innovation. Chaque formulation est développée avec exigence, en partenariat avec des experts en cosmétologie et des producteurs locaux, pour garantir une qualité et une efficacité optimales.</p>
            <p>Nous privilégions des ingrédients bruts d'exception, sélectionnés avec soin pour leurs bienfaits reconnus. Nos processus de fabrication respectueux préservent toute la richesse des huiles essentielles et des actifs naturels afin d'offrir des soins à la fois doux, efficaces et sensoriels. Chaque produit est conçu pour s’intégrer parfaitement à votre rituel beauté et bien-être.</p>
            <Button name="En savoir plus" lien='/actualite/article/9/les-bienfaits-des-huiles-essentielles'/>
          </div>
        </div>
      </section>
      <Newsletter/>
    </div>
  )
}

export default HuilesEssentielles