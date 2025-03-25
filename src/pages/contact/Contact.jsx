import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import validator from "validator";

// CSS
import './contact.scss'

// Component
import Button from '../../components/button/Button'
import Newsletter from '../../components/newsletter/Newsletter'
import TextArea from '../../components/form/TextArea';
import ButtonForm from '../../components/button/ButtonForm';
import Input from '../../components/form/Input';

const Contact = () => {
  const form = useRef(); 
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
      const email = e.target.value;
    
      if (validator.isEmail(email)) {
          setEmailError("Email Valide :)");
      } else {
          setEmailError("Entrez un email valide !");
      }
  };

  const sendEmail = (e) => { 
    e.preventDefault(); 
    
    emailjs 
      .sendForm( 
        import.meta.env.VITE_APP_SERVICE_ID, 
        import.meta.env.VITE_APP_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_APP_PUBLIC_KEY
      ) 
      .then( (result) => { 
          alert('message envoyé avec succès...'); 
          console.log(result.text); 
        }, (error) => { 
          console.log(error.text); 
        } 
      ); 
  }; 

  return (
    <div id="page-contact">    
        <title>Contactez Évasion</title>
        <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
      <section id="section-contact" className='container-image-large'>
          <div className='container-image'>
            <img alt="" src={`${import.meta.env.BASE_URL}/assets/img/photos/plage-france.jpg`}></img>
          </div>
          <div className='container container-grid'>
            <form ref={form} name="contact_form" onSubmit={sendEmail} 
            className='container-flex-texte container-white grid5'>
              <h1 className='title-XH'>Nous contacter</h1>
              <hr></hr>
              <div className='container-double'>
                <Input  
                      name="Prenom" id="prenom"
                      placeholder="Votre prénom" 
                      required='true'/>

                <Input  
                      name="Nom"  id="nom" 
                      placeholder="Votre nom"
                      required='true' />

              </div>
              <Input  
                      id="Mail"   name="mail" 
                      class="input-large"
                      placeholder="votre-mail@contact.com" 
                      type="text" required='true'
                      onChange={(e) => validateEmail(e)}
                      />
              {emailError}
              <TextArea 
                      name="Message"  id="message" 
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