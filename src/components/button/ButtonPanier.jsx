import React, { useState } from 'react'
import { Navigate } from 'react-router';

// CSS
import './button.scss';

// Context
import { usePanier } from "../../context/PanierContext";

const ButtonPanier = (props) => {
  const { addPanier, addGamme, lessPanier, deletePanier } = usePanier();
  const [toPanier, setToPanier] = useState(false);

  if (toPanier) {
    return <Navigate to="/panier" />;
  }

  return (
    <div className="button button-panier">
        <button type="button" id={props.value && props.value} className='border-button'
                onClick={() => 
                    props.navigate === 'true' && setToPanier(true) ||
                    props.action === 'add'    && addPanier(props.uuid, 1) ||
                    props.action === 'addGamme' && addGamme(props.gamme, 1) ||
                    props.action === 'delete' && deletePanier(props.uuid) ||
                    props.action === 'less'   && lessPanier(props.uuid, 1)
                  }>
            {props.name}
        </button>
    </div>
  )
}

export default ButtonPanier