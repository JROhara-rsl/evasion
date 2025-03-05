import React from 'react'
import { Helmet } from 'react-helmet-async';

// CSS
import './contact.scss'

// Component
import Button from '../../components/button/Button'
import Newsletter from '../../components/newsletter/Newsletter'
import TextArea from '../../components/form/TextArea';
import ButtonForm from '../../components/button/ButtonForm';
import Input from '../../components/form/Input';

const Contact = () => {
  return (
    <div id="page-contact">    
      <Helmet>
        <title>Contactez Évasion</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      </Helmet>
      <section id="section-contact" className='container-image-large'>
          <div className='container-image'>
            <img alt="" src="../../public/assets/img/photos/plage-france.jpg"></img>
          </div>
          <div className='container container-grid'>
            <form className='container-flex-texte container-white grid5'>
              <h1 className='title-XH'>Nous contacter</h1>
              <hr></hr>
              <div className='container-double'>
                <Input  
                      name="Prénom" 
                      id="prenom"
                      placeholder="Votre prénom" 
                      required='true'/>

                <Input  
                      name="Nom" 
                      id="nom" 
                      placeholder="Votre nom"
                      required='true' />

              </div>
              <Input  
                      id="mail" 
                      name="mail" 
                      class="input-large"
                      placeholder="votre-mail@contact.com" 
                      type="mail"
                      required='true' />

              <TextArea 
                      name="Message" 
                      id="message" 
                      placeholder="Votre message"
                      required='true' />

              <ButtonForm id="envoyer" name="envoyez" placeholder="Envoyez" type="submit" />
            </form>
          </div>
      </section>
      <Newsletter/>
    </div>
  )
}

export default Contact