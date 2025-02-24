import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './newsletter.scss'

// Component
import ButtonForm from '../button/ButtonForm';
import Input from '../form/Input';

const Newsletter = () => {
  return (
    <section id="container-newsletter" className='container container-grid container-white'>
        <h2 className='grid3'>Ne manquez aucun instant d'évasion !</h2>
        <div className='grid4'>
            <p>Inscrivez-vous à notre newsletter et recevez en avant-première nos nouveautés, conseils bien-être et offres exclusives. Offrez-vous une parenthèse de douceur directement dans votre boîte mail !</p>
            <div className='container-button'>
                <Input name="Votre mail" placeholder="votre-mail@contact.com" type="mail" />
                <ButtonForm name="Envoyez" />
            </div>
        </div>
        <hr className='grid8'></hr>
    </section>
  )
}

export default Newsletter