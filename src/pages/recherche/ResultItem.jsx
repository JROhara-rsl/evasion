import { Link } from 'react-router'

// JS
import functionActu from '../actualite/functionActualite.js'

// Component
import Button from '../../components/button/Button.jsx';

const ResultItem = ({ result }) => {    
    if (result.table === "produits") {
        return (
            <div className="product-card container-post">
                <div  className='container-post-meta'>
                    <Link to={'/shop/item/'+(result.categorieId)+'/'+(result.uuid)} className='post-image'>
                        <img alt={result.name} src={`${import.meta.env.BASE_URL+'/assets/img/'+(result.img)+'-350px.png'}`} />
                    </Link>
                    <div className='container-meta'>
                        <h3 className='title-post-post'>{result.name}</h3>
                        <div className='meta'>
                            <span>{result.gamme}</span>
                            <span>{result.format}ml</span>
                        </div>
                        <hr></hr>
                        <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                        <Button name={'Découvrir le produit'} lien={'/shop/item/'+(result.categorieId)+'/'+(result.uuid)} />
                    </div>
                </div>
            </div>
        );
    } else if (result.table === "articles") {
        return (
            <div className="article-card container-post">
                <div  className='container-post-meta'>
                    <Link to={functionActu.urlArticle(result.title, result.id)} className='post-image'>
                        <img alt={result.name} src={`${import.meta.env.BASE_URL+(result.image)+'-400px.jpg'}`} />
                    </Link>
                    <div className='container-meta'>
                        <h3 className='title-post-post'>{result.title}</h3>
                        <div className='meta'>
                            <span>{result.category_article}</span>
                            <span>{result.author}</span>
                        </div>
                        <hr></hr>
                        <Button name={"Découvrir l'article"} lien={functionActu.urlArticle(result.title, result.id)} />
                    </div>
                </div>
            </div>
        );
    } else {    
        return null;
    }
};

export default ResultItem