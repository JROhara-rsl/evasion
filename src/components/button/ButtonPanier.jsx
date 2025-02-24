import React from 'react'

// CSS
import '../../scss/custom.scss'
import './button.scss';

function addPanier(element, quantite) {
  const panier = JSON.parse(localStorage.getItem("panier")) || {};
  
  if (panier[element]) {
    // Si l'élément existe, augmenter la quantité
    panier[element].quantite += quantite;
  } else {
    // Sinon, l'ajouter avec la quantité
    panier[element] = { quantite };
  }

  localStorage.setItem("panier", JSON.stringify(panier))
}

function deletePanier(element) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  
  if (!panier[element]) return; // 🔍 Vérifie si l'élément existe
  delete panier[element];
  localStorage.setItem("panier", JSON.stringify(panier));

  goPanier(); 
}

function goPanier() {
  document.location.href="../../../panier";
}

const ButtonPanier = (props) => {
  return (
    <div className="button button-panier">
        <button type="button" id={props.value && props.value} className='border-button'
                onClick={() => 
                    props.lien && goPanier() ||
                    props.add && addPanier(props.uuid, 1) ||
                    props.delete && deletePanier(props.uuid) 
                  }>
            {props.name}
        </button>
    </div>
  )
}

export default ButtonPanier