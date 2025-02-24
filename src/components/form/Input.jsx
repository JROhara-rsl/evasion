import React from 'react'


// CSS
import '../../scss/custom.scss'
import './form.scss'

const Input = (props) => {
  return (
    <div id="form-newsletter">  
        <label htmlFor={props.id}>{props.name}</label>
        <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input