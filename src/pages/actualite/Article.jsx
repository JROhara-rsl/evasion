import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import supabase from "../../supabase.js";
import { Helmet } from 'react-helmet-async';

// CSS
import './actualite.scss'
import Button from '../../components/button/Button.jsx'
import ButtonPicto from '../../components/button/ButtonPicto.jsx';

const Article = () => {
  const params = useParams()
  const { id } = params;  
  const [article, setArticle] = useState([]);

  // Importer la BDD de l'article
  useEffect(() => {
    const fetchArticle = async () => {
      try{
        console.log(id);
        
        const {data, status, error} = await supabase.from("articles").select("*");          
        const dataId = data.filter((article) => article.id == id);
        if(status === 200) setArticle(dataId[0])  

        } catch(error) {
          console.log("Error fetching: ", error);
        }
      }
      fetchArticle()
    }, []);

  return (
    <div>
        <Helmet>
          <title>L'Actualité pour s'évader avec Évasion</title>
          <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
        </Helmet>
        <section id="container-post-article" className='container-dark'>
        <div className='container'>
          { article &&
            <div id="link-breadcrumb" ><ButtonPicto name="Retour à la page d'accueil" lien='/' img='../../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link>/<Link to='/actualite'>Actualité</Link>/<Link to={'/actualite/article/'+(article.id)}>{article.title}</Link></div>
          }
          <div className='container-grid'>
            { article &&  
                <div key={article.uuid} id="container-post-article" className='grid6 container-white'>
                  <div className="container-article grid4">
                    <div className='container-image'>
                      <img src={'http://localhost:5173'+(article.image)+'-1000px.jpg'} alt={article.title}/>
                    </div>
                    <span>{article.date} / {article.author}</span>
                    <h1 className='title-X'>{article.title}</h1>
                    <div className='content' dangerouslySetInnerHTML={{ __html: article.content }}></div>
                  </div>
                </div>
            } 
              <div id="container-articles" className='grid3'>
                <h3>Actualité</h3>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Article