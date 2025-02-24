import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './button.scss';

const ButtonForm = (props) => {
    const sendData = () => {
        const newValue = props.value;
        setIsActive(newValue);

        if (props.onToggle) {
            props.onToggle(props.filtre, props.value, newValue); // Envoi la valeur du bouton au parent
        }
    };

  return (
    <div className={props.class ? 'button-form ' + props.class : 'button-form'}>
        <button type="button" id={props.id && props.id} className='border-button' 
        name={props.name && props.name} filtre={props.filtre && props.filtre} onClick={sendData}>
            <label htmlFor={props.name && props.name}>{props.name}</label>
        </button>
    </div>
  )
}

export default ButtonForm