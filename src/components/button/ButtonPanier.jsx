import React from 'react'

// CSS
import './button.scss';

// Context
import { usePanier } from "../../context/PanierContext";

const ButtonPanier = (props) => {
  const { addPanier, lessPanier, deletePanier } = usePanier();

  return (
    <div className="button button-panier">
        <button type="button" id={props.value && props.value} className='border-button'
                onClick={() => 
                    props.action === 'add'    && addPanier(props.uuid, 1) ||
                    props.action === 'delete' && deletePanier(props.uuid) ||
                    props.action === 'less'   && lessPanier(props.uuid, 1)
                  }>
            {props.name}
        </button>
    </div>
  )
}

export default ButtonPanier