import React from 'react'


// CSS
import '../../scss/custom.scss'
import './form.scss'

const Input = (props) => {
  return (
    <div id="form-newsletter">  
        <label htmlFor={props.id}>{props.name}</label>
        <input  id={props.id} name={props.name && props.name} type={props.type && props.type} 
                placeholder={props.placeholder && props.placeholder} pattern={props.type === 'mail' && ".+@example\.com"} required />
    </div>
  )
}

export default Input