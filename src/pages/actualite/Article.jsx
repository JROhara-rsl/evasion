import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import supabase from "../../supabase.js";
import functionActu from './functionActualite.js'

// CSS
import './actualite.scss'

// COMPONENT
import Button from '../../components/button/Button.jsx'
import ButtonPicto from '../../components/button/ButtonPicto.jsx';
import ItemArticle from './ItemArticle.jsx'
import Newsletter from '../../components/newsletter/Newsletter.jsx'

const Article = () => {
  const params = useParams()
  const { id } = params;  
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categoryArticle, setCategoryArticle] = useState();

  // Importer la BDD de l'article
  useEffect(() => {
    const fetchArticle = async () => {
      try{        
        const {data, status, error} = await supabase.from("articles").select("*");          
        const dataId = data.filter((article) => article.id == id);
        if(status === 200) setArticle(dataId[0])  
        if(status === 200) setCategoryArticle(dataId[0].category_article)    

        } catch(error) {
          console.log("Error fetching: ", error);
        }
      }
      fetchArticle()
    }, [id]);

    useEffect(() => {
      const fetchSlides = async () => {
        try{
          
          const {data, status, error} = await supabase
                                        .from("articles")
                                        .select("*")
                                        .in("category_article", [categoryArticle])
                                        .neq("id", id) 
                                        .limit(3);
        

          const dataCategory = data.filter((item) => item.category_article === categoryArticle);
          if(status === 200) setArticles(dataCategory)            

        } catch(error) {
          console.log("Error fetching: ", error);
        }
      }
      fetchSlides()
    }, [id, categoryArticle]);

  return (
    <div>
          <title>{article ? article.title : "L'Actualité pour s'évader avec Évasion"}</title>
          <meta name='description' content={article ? article.chapeau : "Toute l'actualité pour s'évader avec Évasion"} />
        <section id="container-post-article" className='container-dark'>
        <div className='container'>
          { article &&
            <div id="link-breadcrumb" ><ButtonPicto name="Retour à la page d'accueil" lien='/' img={`${import.meta.env.BASE_URL}/assets/picto/picto-back.svg`}/><Link to='/'>Évasion</Link>/<Link to='/actualite'>Actualité</Link>/<Link to={functionActu.urlArticle(article.title, article.id)}>{article.title}</Link></div>
          }
          <div className='container-grid'>
            { article &&  
                <div key={article.uuid} id="container-post-article" className='grid6 container-white'>
                  <div className="container-article grid4">
                    <div className='container-image'>
                      <img src={import.meta.env.BASE_URL + article.image + '-1000px.jpg'} alt={article.title}/>
                    </div>
                    <span className='meta'>{article.date} / {article.category_article}</span>
                    <h1 className='title-X'>{article.title}</h1>
                    <div className='chapeau'>{article.chapeau}</div>
                    <div className='content' dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    <span className='author'>{article.author}</span>
                  </div>
                </div>
            } 
              <div id="container-item-articles" className='grid3'>
                <h3>Actualité</h3>
                <div className='container-post-item'>
                  {articles.map(article => 
                    <ItemArticle 
                      key={article.id} 
                      id={article.id}
                      title={article.title} 
                      lien={functionActu.urlArticle(article.title, article.id)}
                      date={article.date} 
                      category={article.category_article}
                      image={article.image}
                      chapeau={article.chapeau}
                    />)}
                  </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter /> 
    </div>
  )
}

export default Article