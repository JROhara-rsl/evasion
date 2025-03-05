import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../supabase";

const ProfilContext = createContext();

export const ProfilProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

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

    useEffect(() => {
        const fetchUser = async () => {
          const { data: userData, error } = await supabase.auth.getUser();
    
          if (error) {
            console.error("Erreur lors de la récupération de l'utilisateur:", error);
            return;
          }
    
          if (userData?.user) {
            setUser(userData.user);
            //fetchProfile(userData.user.id); // Appelle fetchProfile SEULEMENT si l'utilisateur est défini
          }
        };
    fetchUser();
    }, []);

    const fetchProfile = async () => {        
        if (!session || !session.user) {
            console.error("Session non définie !");
            return;
        }      
        let { data, error } = await supabase
                                    .from("profiles")
                                    .select("*")
                                    .eq("id", session.user.id)
                                    .single();
    
        if (error) console.error(error);
        setProfile(data);
    };

    useEffect(() => {
        if (session) {
            fetchProfile();
        }
    }, [session]);
    console.log(profile);
    return (
        <ProfilContext.Provider value={{ session, user, profile }}>
          {children}
        </ProfilContext.Provider>
    );
}

// Hook personnalisé pour utiliser le contexte plus facilement
export const useProfil = () => useContext(ProfilContext);
