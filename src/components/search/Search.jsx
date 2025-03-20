import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// Component
import ButtonPicto from '../button/ButtonPicto';
import ButtonForm from '../../components/button/ButtonForm';
import Input from '../../components/form/Input';

// CSS
import './search.scss'

const Search = (props) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSearch(props.active)
  }, [props]);

  const searchStart = (event) => {
    event.preventDefault(); 
    
    const { search } = event.target
    console.log(search.value);
    navigate("/recherche/"+search.value);
  }

  return (
    <div id='container-search' className={activeSearch ? 'active' : ''}>
        <div id='header-search'>
            <form className='border-nav display-nav' onSubmit={searchStart}>
                <ButtonPicto name='Rechercher' img='http://localhost:5173/public/assets/picto/picto-search.svg'/>

                <Input  
                        name="Rechercher"  id="search" required='true'
                        placeholder="Tapez vos mots-clés de recherche"     />

                <ButtonForm id="validez" name="validez" placeholder="Validez" type="submit" />
            </form>
        </div>
        <div className='background-search' onClick={props.click}></div>
    </div>
  )
}

export default Search