import React from 'react'

// CSS
import './form.scss'

const TextArea = (props) => {
  return (
    <div className='form-textarea'>  
        <label htmlFor={props.id && props.id}>
            {props.name && props.name}
        </label>
        <textarea   id={props.id && props.id} 
                    name={props.name && props.name} 
                    defaultValue={props.placeholder && props.placeholder} 
                    required />
    </div>
  )
}

export default TextArea