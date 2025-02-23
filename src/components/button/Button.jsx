import React from 'react'
import { Link } from 'react-router';

// CSS
import '../../scss/custom.scss'
import './button.scss';

const Button = (props) => {
  return (
    <div class="button">
        <Link to={props.lien} className={'border-button ' + props.class}>
            {props.name}
        </Link>
    </div>
  )
}

export default Button