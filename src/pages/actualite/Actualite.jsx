import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'
import supabase from "../../supabase.js"
import functionActu from './functionActualite.js'

// CSS
import './actualite.scss'
import Newsletter from '../../components/newsletter/Newsletter.jsx'
import Button from '../../components/button/Button.jsx'

const ItemArticle = (props) => {
  return (
    <div className='container-post container-article'>
      <div className='border'>
        <span className='meta-post-date'>{functionActu.dateMonthDay(props.date)}</span>
        <Button lien={props.lien} class='button-read' name='Lire la suite'/>
      </div>
      <div  className='container-post-meta'>
        <Link to={props.lien} className='article-image'>
          <img alt={props.title} src={ 'http://localhost:5173'+(props.image)+'-400px.jpg'} />
        </Link>
        <div className='container-meta'>
          <h3 className='meta-post-title title-post-item'>{props.title}</h3>
          <span className='meta-post-category'>{props.category}</span>
          <hr></hr>
          <p>{functionActu.resume(props.chapeau)}</p>
        </div>
      </div>
    </div>
  )
}

const Actualite = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try{
        const {data, status, error} = await supabase
                                      .from("articles")
                                      .select("*");
        
        if(status === 200) setArticles(data)          
        
      } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchSlides()
    
  }, []);

  return (
     <div id="page-actualite">    
        <Helmet>
          <title>L'Actualité pour s'évader avec Évasion</title>
          <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
        </Helmet>
        <div className='container-dark'>
          <div className='container'>
            <div className="header-articles">
                  <h1>Actualité</h1>
            </div>
            <div className='container-grid'>
              <div id='container-filter' className='grid1'>
              </div>
              <div id="container-articles" className='container-post-item grid7'>
                {articles.map(article => 
                  <ItemArticle 
                    key={article.id} 
                    id={article.id}
                    title={article.title} 
                    lien={functionActu.urlArticle(article.title, article.id)}
                    date={article.date} 
                    category={article.category}
                    image={article.image}
                    chapeau={article.chapeau}
                  />)}
              </div>
            </div>
          </div>
        </div> 
        <Newsletter />   
      </div>
  )
}

export default Actualite