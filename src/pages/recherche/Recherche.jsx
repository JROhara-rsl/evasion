import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import supabase from "../../supabase.js"

import ButtonPicto from '../../components/button/ButtonPicto.jsx';
import Button from '../../components/button/Button.jsx';

// CSS
import '../shop/Shop.jsx'
import '../panier/Panier.jsx'

const Recherche = () => {
    const params = useParams()
    const { searchTerm } = params;  
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                let allResults = [];

                // Recherche dans la table "produits"
                const { data: produits, error: produitsError } = await supabase
                    .from('produits')
                    .select('*')
                    .or(`name.ilike.%${searchTerm}%,gamme.ilike.%${searchTerm}%`);
                        
                if (produitsError) {
                    console.warn("Erreur lors de la recherche dans produits:", produitsError);
                } else if (produits.length > 0) {
                    allResults.push({ table: "produits", results: produits });
                }

                // Recherche dans la table "articles"
                const { data: articles, error: articlesError } = await supabase
                    .from('articles')
                    .select('*')
                    .or(`title.ilike.%${searchTerm}%,chapeau.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);

                if (articlesError) {
                    console.warn("Erreur lors de la recherche dans articles:", articlesError);
                } else if (articles.length > 0) {
                    allResults.push({ table: "articles", results: articles });
                }

                setPosts(allResults[0].results);
                console.log("Résultats de recherche :", allResults[0].results);

            } catch (error) {
                console.error("Erreur lors de la recherche :", error);
            }
        }
        fetchSearch()
    }, [searchTerm]);   

  return (
    <div>
        <Helmet>
            <title>Votre recherche</title>
            <meta name='description' content="Recherche : " />
        </Helmet>
        <div className="container">
            <header>
                <h1 className=''>Votre recherche</h1>
                <span id="link-breadcrumb" className=''><ButtonPicto name="Retour à l'accueil" lien='/' img='../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link></span>
            </header>
            <div className='container-grid'>
                <div id="container-search-post" className='grid6'>
                    {posts.map((post) => (
                        <div key={post.uuid} className='container-post'>
                            <div className='border'></div>
                            <div  className='container-post-meta'>
                            <Link to={'/shop/post/'+(post.categorieId)+'/'+(post.uuid)} className='post-image'>
                                <img alt={post.name} src={ 'http://localhost:5173/public/assets/img/'+(post.img)+'-350px.png'} />
                            </Link>
                            <div className='container-meta'>
                                <h3 className='title-post-post'>{post.name}</h3>
                                <div className='meta'>
                                    <span>{post.gamme}</span>
                                    <span>{post.format}ml</span>
                                </div>
                                <hr></hr>
                                <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                                <Button name={'Découvrir le ' + post.name} lien={'/shop/post/'+(post.categorieId)+'/'+(post.uuid)} />
                            </div>
                            </div>
                        </div>
                    ))}     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recherche