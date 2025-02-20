import React from 'react'

// CSS
import '../../scss/custom.scss'
import './button.scss';
import { Link } from 'react-router';

const Button = (props) => {
  return (
    <button>
        <Link to={props.lien} className={'border-button ' + props.class}>
            {props.name}
        </Link>
    </button>
  )
}

export default Button