import React, { useState } from 'react'
import { Link } from 'react-router';

// CSS
import './button.scss';

const ButtonToggle = (props) => {
    const [isActive, setIsActive] = useState(false);
    
    const sendData = () => {
        
        const newValue = !isActive;
        setIsActive(newValue);

        if (props.onToggle) {
            props.onToggle(props.filtre, props.name, newValue); // Envoi la valeur du bouton au parent
        }
    };

  return (
    <div className={props.class ? 'button-toggle ' + props.class : 'button-toggle'}>
        <button type="button" 
                id={props.value && props.value} 
                className={`border-button ${isActive ? 'toggle' : ''} ${props.class ? props.class : ''}`} 
                name={props.name && props.name} 
                filtre={props.filtre && props.filtre} 
                onToggle={props.toggle}
                onClick={sendData}>
            <label htmlFor={props.value && props.value}>{props.placeHolder}</label>
        </button>
    </div>
  )
}

export default ButtonToggle