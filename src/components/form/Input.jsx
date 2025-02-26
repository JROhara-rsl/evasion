import React from 'react'

// CSS
import './form.scss'

const Input = (props) => {
  return (
    <div className='form-input'>  
        <label htmlFor={props.id ? props.id : ''}>{props.name ? props.name : ''}</label>
        <input  id={props.id ? props.id : ''} 
                name={props.name ? props.name : ''} 
                type={props.type ? props.type : ''}
                className={props.class ? props.class : ''}
                placeholder={props.placeholder ? props.placeholder : ''} 
                pattern={props.type === 'mail' ? ".+@example\.com" : ''} 
                required />
    </div>
  )
}

export default Input