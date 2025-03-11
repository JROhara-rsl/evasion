import React, { useState } from 'react'
import supabase from "../../supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// CSS
import '../../scss/custom.scss'
import './newsletter.scss'

// Component
import ButtonForm from '../button/ButtonForm';
import Input from '../form/Input';

// Context
import { useProfil } from "../../context/ProfilContext";

const Newsletter = () => {
  const { session } = useProfil();
  const [mails, setMails] = useState([]);
  const [check, setCheck]  = useState(false);

  const updateNewsletter = async (updatedMail) => {
    if (!session.user) {
      console.error("Utilisateur non connecté !");
      return;
    }
  
    const { error } = await supabase
      .from("newsletter")
      .insert({ mail: updatedMail }); // Ajoute un nouveau champs
      
    if (error) {
      console.error("Erreur lors de la mise à jour du profil :", error.message);
    } else {
      console.log("Profil mis à jour avec succès !");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setMails(prevMails => ({...prevMails, [name]:value}))
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault(mails.mail);
    await updateNewsletter(mails.mail);
    setCheck(true)
    console.log(mails);
  }

  return (
    <section id="container-newsletter" className='container container-grid container-white'>
        <h2 className='grid3'>Ne manquez aucun instant d'évasion !</h2>
        <div className='grid4'>
            <p>Inscrivez-vous à notre newsletter et recevez en avant-première nos nouveautés, conseils bien-être et offres exclusives. Offrez-vous une parenthèse de douceur directement dans votre boîte mail !</p>
            <form id="form-newsletter" className='container-double' onSubmit={handleSubmit} onChange={handleChange} >
                <Input  id="mail" 
                        name="mail" 
                        placeholder="votremail@contact.com" 
                        type="mail" 
                />
                <ButtonForm 
                        id="envoyer" 
                        name="envoyez" 
                        placeholder="Envoyez"
                        type="submit" 
                />
            </form>
            <div id="form-information">{check ? "C'est bien reçu, merci" : ''}</div>
        </div>
        <hr className='grid8'></hr>
    </section>
  )
}

export default Newsletter