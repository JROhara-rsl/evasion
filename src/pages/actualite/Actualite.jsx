import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'
import supabase from "../../supabase.js"
import functionActu from './functionActualite.js'

// CSS
import './actualite.scss'

// COMPONENT
import Newsletter from '../../components/newsletter/Newsletter.jsx'
import Button from '../../components/button/Button.jsx'
import ButtonToggle from '../../components/button/ButtonToggle.jsx';
import ItemArticle from './ItemArticle.jsx'

const Actualite = () => {
  const [articles, setArticles] = useState([]);
  const [categorieOn, setCategorieOn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorieActive, setCategorieActive] = useState([]);

  // Importer les catégories des articles de SUPABASE
  useEffect(() => {
    const fetchCategoryArticle = async () => {
      try{
        const {data, status, error} = await supabase
                                      .from("articles")
                                      .select("category_article");
         
          if(status === 200) {
            // Filter seulement les catégories pour en avoir un seule exemplaire.
            const uniqueCategories = [...new Set(data.map(item => item.category_article))]       
            setCategories(uniqueCategories) 
          }            
          } catch(error) {
        console.log("Error fetching: ", error);
      }
    }
    fetchCategoryArticle()
  }, []);

  
  const handleToggle = (filtre, name) => {    
    if(filtre === 'categorie') {
      setCategorieActive((prevCategories) => {
        // Si la catégorie est déjà activée, on l'enlève (désactivation)
        if (prevCategories.includes(name)) {
          return prevCategories.filter((cat) => cat !== name);
        }
        // Sinon, on l'ajoute (activation)
        return [...prevCategories, name];
      });
    }
  };

  // Importer les articles de SUPABASE en filtrant par catégories activées
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        let query = supabase.from("articles").select("*");
  
        // Si des catégories sont activées, on filtre
        if (categorieActive.length > 0) {
          query = query.in("category_article", categorieActive);
        }
  
        const { data, error } = await query;
  
        if (error) {
          console.error("Erreur lors du chargement des articles :", error);
        } else {
          setArticles(data);
        }
      } catch (error) {
        console.error("Erreur de requête :", error);
      }
    };
  
    fetchArticle();
  }, [categorieActive]); 
  

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
                    <div className='liste-filter'>
                      <h2 className='name-category'>Catégories</h2>
                      <ul>
                      {categories.map((categorie, index) => 
                        <ButtonToggle 
                          key={index}
                          class="button-white"
                          filtre="categorie" 
                          name={categorie} 
                          placeHolder={categorie}
                          onToggle={handleToggle} 
                        />
                      )}
                      </ul>
                    </div>
                  </div>  
              <div id="container-articles" className='container-post-item grid8'>
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
        <Newsletter />   
      </div>
  )
}

export default Actualite