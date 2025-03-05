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
import ButtonForm from '../../components/button/ButtonForm';

// Context
import { useProfil } from "../../context/ProfilContext";

const Compte = () => {
  const { profile } = useProfil();
  const { session } = useProfil();
  const [maj, setMaj] = useState(false);

  const updateProfile = async (updatedFields) => {
    if (!session.user) {
      console.error("Utilisateur non connecté !");
      return;
    }
  
    const { error } = await supabase
      .from("profiles")
      .update(updatedFields) // Met à jour uniquement les champs fournis
      .eq("id", session.user.id);
      
    if (error) {
      console.error("Erreur lors de la mise à jour du profil :", error.message);
    } else {
      console.log("Profil mis à jour avec succès !");
    }
  };

  const [formData, setFormData] = useState({
    username: profile?.username || "",
    birthdate: profile?.birthdate || "",
    address: profile?.address || "",
    city: profile?.city || "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );
    await updateProfile(cleanedData); // Envoie uniquement les données modifiées
    setMaj(true)
  };

  return (
    <section id="compte-container"  className="container">
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
                value={formData.username}
                change={handleChange}
                placeholder={profile ? profile.username : "Chargement..."} 
                />  
            <Input  
                name="Date de naissance" 
                id="birthdate"
                type="date"  
                value={formData.date}
                change={handleChange}
                placeholder={session ? session.user.birthdate : "Chargement..."}
                />    
            <hr></hr>
            <Input  
                name="Adresse" 
                id="address"
                type="text" 
                value={formData.address}
                change={handleChange}
                placeholder={profile ? profile.address : "Chargement..."} />
            <Input  
                name="Ville" 
                id="city"
                type="text" 
                value={formData.city}
                change={handleChange}
                placeholder={profile ? profile.city : "Chargement..."} />
            <hr></hr>
            <div className='button'>
              <span>{maj === true ? 'Profil mis à jour !' : ''}</span>
              <ButtonForm 
                id="envoyer" 
                name="modifier" 
                placeholder="Modifier" 
                type="submit" 
                click={handleSubmit}
              />
              <ButtonForm  
                id="disconnect" 
                name="disconnect" 
                placeholder="Se déconnecter" 
                click={() => supabase.auth.signOut()} 
              />
            </div>
          </form>
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
