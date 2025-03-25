import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router';
import supabase from "../../supabase.js"

// Component
import ButtonPicto from '../../components/button/ButtonPicto.jsx';
import ResultItem from './ResultItem.jsx';
import Search from '../../components/search/Search.jsx';

// CSS
import './recherche.scss'

const Recherche = () => {
    const params = useParams()
    const { searchTerm } = params;  
    const [results, setResults] = useState([]);

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

                setResults(allResults);
                //console.log("Résultats de recherche :", allResults);

            } catch (error) {
                console.error("Erreur lors de la recherche :", error);
            }
        }
        fetchSearch()
    }, [searchTerm]);   
    console.log("Résultats avant rendu :", results);

  return (
    <div>
            <title>Votre recherche</title>
            <meta name='description' content={searchTerm ? "Recherche : " + searchTerm : "Résultat de la recherche"} />
        <div id="page-rechercher" className="container">
            <header>
                <h1 className=''>Votre recherche</h1>
                <span id="link-breadcrumb" className=''><ButtonPicto name="Retour à l'accueil" lien='/' img='../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link></span>
            </header>
            <div className='container-grid'>
                <Search active='true' />
                <div id="container-search-post">
                    {results.length === 0 ? (
                        <p>Aucun résultat trouvé.</p>
                        ) : (
                            results.map((group, index) => (
                                    group.results.map((item) => (
                                        <ResultItem key={item.uuid} result={{ table: group.table, ...item }} />
                                    ))
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recherche