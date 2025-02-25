import React, { useState } from 'react'

// CSS
import '../../scss/custom.scss'
import './newsletter.scss'

// Component
import ButtonForm from '../button/ButtonForm';
import Input from '../form/Input';

const Newsletter = () => {
  const [mails, setMails] = useState([]);
  const [check, setCheck]  = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target
    setMails(prevMails => ({...prevMails, [name]:value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault(mails.mail);
    setCheck(true)
    console.log(mails);
  }

  return (
    <section id="container-newsletter" className='container container-grid container-white'>
        <h2 className='grid3'>Ne manquez aucun instant d'évasion !</h2>
        <div className='grid4'>
            <p>Inscrivez-vous à notre newsletter et recevez en avant-première nos nouveautés, conseils bien-être et offres exclusives. Offrez-vous une parenthèse de douceur directement dans votre boîte mail !</p>
            <form className='container-button' onSubmit={handleSubmit} onChange={handleChange} >
                <Input name="mail" placeholder="votre-mail@contact.com" type="mail" />
                <ButtonForm name="Envoyez" type="submit" />
            </form>
            <div id="form-information">{check ? "C'est bien reçu, merci" : ''}</div>
        </div>
        <hr className='grid8'></hr>
    </section>
  )
}

export default Newsletter