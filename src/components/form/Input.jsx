import React from 'react'

// CSS
import './form.scss'

const Input = (props) => {
  return (
    <div className='form-input'>  
        <label htmlFor={props.id ? props.id : ''}>{props.name ? props.name : ''}</label>
        <input  id={props.id ? props.id : ''} 
                name={props.name ? props.name : ''} 
                className={props.class && props.class}
                type={props.type ? props.type : undefined}
                value={props.value ? props.value : undefined}
                onChange={props.change ? props.change : undefined}
                placeholder={props.placeholder ? props.placeholder : ''} 
                pattern={props.type === 'mail' ? ".+@example\.com" : undefined} 
                required={props.required ? 'required' : undefined} />
    </div>
  )
}

export default Input