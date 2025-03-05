import React, { useState } from 'react'

// CSS
import './button.scss';

const ButtonForm = (props) => {


  return (
    <div className={props.class ? 'button-form ' + props.class : 'button-form'}>
        <button id={props.id && props.id} className='border-button' 
                name={props.name && props.name} 
                filtre={props.filtre && props.filtre} 
                type={props.type ? props.type : "button"} 
                onClick={props.click ? props.click : undefined} 
                onSubmit={props.submit ? props.submit : undefined}>
            <label forhtml={props.id && props.id} htmlFor={props.name && props.name}>{props.placeholder}</label>
        </button>
    </div>
  )
}

export default ButtonForm