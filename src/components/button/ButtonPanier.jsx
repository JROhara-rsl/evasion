import React from 'react'

// CSS
import '../../scss/custom.scss'
import './button.scss';

function addPanier(element, quantite) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  
  const found = panier.find((liste) => liste === element);
  if(!found) {
    panier.push([element, quantite]);
  }
  localStorage.setItem("panier", JSON.stringify(panier))
}

function deletePanier(element) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const found = panier.find((liste) => liste === element);
  if(!found) {
    const nouveauPanier = panier.filter(produit => produit[0] !== element);
    localStorage.setItem("panier", JSON.stringify(nouveauPanier))
  }
  goPanier()
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