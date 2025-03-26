import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../supabase";

const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
    // Charger le panier depuis le localStorage au démarrage
    const [panier, setPanier] = useState(() => {
      const savedPanier = localStorage.getItem("panier");
      return savedPanier ? JSON.parse(savedPanier) : {};
    });
  
    // Sauvegarder dans le localStorage à chaque mise à jour du panier
    useEffect(() => {
      localStorage.setItem("panier", JSON.stringify(panier));
    }, [panier]);
  
    // Ajouter une quantité
    const addPanier = (uuid, quantite = 1) => {
      setPanier(prevPanier => ({
        ...prevPanier,
        [uuid]: {
          quantite: (prevPanier[uuid]?.quantite || 0) + quantite
        }
      }));
    };
    
    // Ajouter une gamme entière
    const addGamme = async (gamme, quantite = 1) => {
      try {
        const { data, error } = await supabase
          .from("produits")
          .select("uuid")
          .eq("gammeId", gamme); // Filtre par gamme
    
        if (error) throw error;
        
        if (!data || data.length === 0) {          
          console.log("Aucun produit trouvé pour cette gamme.");
          return;
        }
        setPanier(prevPanier => {
          const newPanier = { ...prevPanier };
    
          data.forEach(product => {
            const uuid = product.uuid;
            newPanier[uuid] = {
              quantite: (prevPanier[uuid]?.quantite || 0) + quantite
            };
          });
          localStorage.setItem("panier", JSON.stringify(newPanier)); // Sauvegarde dans localStorage

      return newPanier;
        });
      } catch (error) {
        console.error("Erreur lors de l'ajout des produits de la gamme :", error);
      }
    };

    // Soustraire une quantité
    const lessPanier = (uuid, quantite = 1) => {
      setPanier(prevPanier => {
        const currentQuantity = prevPanier[uuid]?.quantite || 0;

        if (currentQuantity <= 1) {
          // Si la quantité atteint 1, on supprime l'élément
          const newPanier = { ...prevPanier };
          delete newPanier[uuid];
          return newPanier;
        }
        return {
          ...prevPanier,
          [uuid]: {
            quantite: currentQuantity - quantite
          }
        };
      });
    };

    // Supprimer un produit
    const deletePanier = (uuid) => {
      setPanier(prevPanier => {
        if (!prevPanier[uuid]) return prevPanier; // Vérifie si l'élément existe

        const newPanier = { ...prevPanier };
        delete newPanier[uuid]; // Supprime le produit

        // Si le panier est vide, remplace par un objet vide
        const updatedPanier = Object.keys(newPanier).length > 0 ? newPanier : {};

        localStorage.setItem("panier", JSON.stringify(newPanier)); // Mise à jour localStorage
        
        return updatedPanier;
      });
    };

  return (
    <PanierContext.Provider value={{ panier, addPanier, addGamme, lessPanier, deletePanier }}>
      {children}
    </PanierContext.Provider>
  );
};


// Hook personnalisé pour utiliser le contexte plus facilement
export const usePanier = () => useContext(PanierContext);
