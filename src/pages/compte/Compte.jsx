import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../supabase";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

// CSS
import './compte.scss';
import '../../components/button/button.scss';

// Component
import Input from '../../components/form/Input';
import ButtonPicto from '../../components/button/ButtonPicto';

// Context
import { useProfil } from "../../context/ProfilContext";

const Compte = () => {
  const { profile } = useProfil();
  const { session } = useProfil();
  
  return (
    <section id="compte-container" className="container">
      <Helmet>
          <title>Votre compte - Évasion</title>
          <meta name='description' content="Personaliser les paramètres de votre compte évasion." />
      </Helmet>
      {session ? (
        <div className="container">
          <header>
            <h1 className='title-H'>Bienvenue, {profile ? profile.username : "Chargement..."} !</h1>
            <span id="link-breadcrumb" className=''><ButtonPicto name='Retour au shop' lien='/shop' img='../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link>/<Link to='/compte'>Compte</Link></span>
          </header>
          <hr></hr>
          <form>
            <Input  
                name="Username" 
                id="username"
                placeholder={profile ? profile.username : "Chargement..."} />
            <Input  
                name="Mail" 
                id="mail"
                placeholder={session ? session.user.email : "Chargement..."}
                type="mail"  
                />    
            <Input  
                name="Date de naissance" 
                id="birthdate"
                placeholder={session ? session.user.birthdate : "Chargement..."}
                type="date"  
                />    
            <hr></hr>
            <Input  
                name="Adresse" 
                id="adress"
                placeholder={profile ? profile.adress : "Chargement..."} />
            <Input  
                name="Ville" 
                id="city"
                placeholder={profile ? profile.city : "Chargement..."} />
          </form>
          <div className='button'>
            <button className="border-button" onClick={() => supabase.auth.signOut()}>Se déconnecter</button>
          </div>
        </div>
      ) : (
        <div className="container container-auth">
          <Auth supabaseClient={supabase} 
                appearance={{ theme: ThemeSupa }} 
                providers={null}
                redirectTo="/update-password" />
        </div>
      )}
    </section>
  );
};

export default Compte;
