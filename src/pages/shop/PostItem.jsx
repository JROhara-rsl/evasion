import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import supabase from "../../supabase.js"
import { Helmet } from 'react-helmet-async';


// CSS
import './shop.scss'

// Component
import Button from '../../components/button/Button'
import ButtonPicto from '../../components/button/ButtonPicto.jsx';
import ButtonPanier from '../../components/button/ButtonPanier.jsx';

const PostItem = () => {
    const params = useParams()
    const { id } = params;  

    const [post, setPost] = useState([])
    const [gamme, setGamme] = useState()
    
    // Importer la BDD du produit BDD
    useEffect(() => {
      const fetchItem = async () => {
        try{
          const {data, status, error} = await supabase.from("produits").select("*");          
          const dataId = data.filter((item) => item.uuid === id);
          if(status === 200) setPost(dataId[0])  
          if(status === 200) setGamme(dataId[0].gammeId)    
            
          } catch(error) {
            console.log("Error fetching: ", error);
          }
        }
        fetchItem()
      }, []);
      
      useEffect(() => {
        //console.log(gamme);
    }, [gamme])

    // Partie propositions produits
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchItem = async () => {
        try{
          const {data, status, error} = await supabase
                                        .from("produits")
                                        .select("*")
                                        .in("gammeId", [gamme])
                                        .neq("uuid", id) 
                                        .limit(3);
          if(status === 200) setItems(data)
            
        } catch(error) {
          console.log("Error fetching: ", error);
        }
      }
      fetchItem()
    }, [gamme]);

  return (
    <>  
        <Helmet>
          <title>{post.name}</title>
          <meta name='description' content="Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature." />
        </Helmet>
        { post &&   
          <section key={post.uuid} id="container-post-product"> 
            <div id="background-post-product"></div>
            <div id="container-post-meta" className='container container-grid'>
              <div className="container-image">
                <img alt={post.name} src={ 'http://localhost:5173/public/assets/img/'+(post.img)} />
                <div className='border'></div>
              </div>
              <div className="container-meta display-flex-texte">
                <span id="link-breadcrumb"><ButtonPicto name='Retour au shop' lien='/shop' img='../../public/assets/picto/picto-back.svg'/><Link to='/'>Évasion</Link>/<Link to='/shop'>Shop</Link>/<Link to={'/shop/item/'+(post.uuid)}>{post.name}</Link></span>
                <span className="brand">{post.gamme}</span>
                <h1 className='title-X'>{post.name}</h1>
                <hr></hr>
                <p className='description'>Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature. </p>
                <span className="category">{post.category}</span>
                <span className="prix">{post.prix}€</span>
                <hr></hr>
                <div>
                  <h3 className='name-category'>Ingrédients</h3>
                </div>
                <div className='container-button'>
                  <ButtonPanier name='Ajouter au panier' add="true" uuid={post.uuid}/>
                  <ButtonPanier name="Acheter" add="true" lien="/panier" uuid={post.uuid} />
                </div>
              </div>
            </div>
          </section>
        }
        <section id="container-proposition">
          <div className='container container-grid'>
          <hr></hr>
            <div className='grid3 display-flex-texte'>
            <h2>Vous pourriez aimer aussi...</h2>
              <p>
              Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature.               </p>
              <Button name='Profitez de toute la gamme !' lien='/nos-gammes' />
            </div>
            <div id="container-shop" className='grid6d'>
              {items.map((item) => (
                <div key={item.uuid} className={'container-product product-' + item.categorieId} >
                  <div className='border'></div>
                  <div  className='container-product-meta'>
                    <Link to={'/shop/item/'+(item.uuid)} className='product-image'>
                      <img alt={item.name} src={ 'http://localhost:5173/public/assets/img/'+(item.img)} />
                    </Link>
                    <div className='container-meta'>
                      <h3 className='title-post-item'>{item.name}</h3>
                      <div className='meta'>
                        <span>{item.gamme}</span>
                        <span>{item.format}ml</span>
                      </div>
                      <hr></hr>
                      <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default PostItem