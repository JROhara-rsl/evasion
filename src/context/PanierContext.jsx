import { createContext, useContext, useState, useEffect } from "react";

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

    // Soustraire une quantité
    const lessPanier = (uuid, quantite = 1) => {
      setPanier(prevPanier => ({
        ...prevPanier,
        [uuid]: {
          quantite: (prevPanier[uuid]?.quantite || 0) - quantite
        }
      }));
    };

    // Supprimer un produit
  const deletePanier = (uuid) => {
    setPanier(prevPanier => {
      const newPanier = { ...prevPanier };
      delete newPanier[uuid]; // Supprime le produit
      return newPanier;
    });
  };

  return (
    <PanierContext.Provider value={{ panier, addPanier, lessPanier, deletePanier }}>
      {children}
    </PanierContext.Provider>
  );
};


// Hook personnalisé pour utiliser le contexte plus facilement
export const usePanier = () => useContext(PanierContext);
