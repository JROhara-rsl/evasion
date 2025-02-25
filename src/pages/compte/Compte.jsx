import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../supabase";

// CSS
import './compte.scss';
import '../../components/button/button.scss';

const Compte = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Vérifie s'il y a une session active
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Écoute les changements d'état de l'authentification
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <section id="compte-container" className="container">
      {session ? (
        <div className="container">
          <h2>Bienvenue, {session.user.email} !</h2>
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
