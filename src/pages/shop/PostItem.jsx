import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import supabase from "../../supabase.js"

// CSS
import './shop.scss'

const PostItem = () => {
    const params = useParams()
    const { id } = params;  

    const [post, setPost] = useState([])

    useEffect(() => {
      const fetchItem = async () => {
        try{
          const {data, status, error} = await supabase.from("produits").select("*");          
          const dataId = data.filter((item) => item.uuid === id);

          if(status === 200) setPost(dataId[0])  
          
        } catch(error) {
          console.log("Error fetching: ", error);
        }
      }
      fetchItem()
    }, []);

  return (
    <>
        { post &&   
          <div key={post.uuid} id="container-post-product"> 
            <div id="background-post-product"></div>
            <div id="container-post-meta" className='container container-grid'>
              <div className="container-image">
                <img alt={post.name} src={ 'http://localhost:5173/public/assets/img/'+(post.img)} />
                <div className='border'></div>
              </div>
              <div className="container-meta">
                <span id="link"><Link to='/'>Évasion</Link>/<Link to='/shop'>Shop</Link>/<Link to={'/shop/item/'+(post.uuid)}>{post.name}</Link></span>
                <span className="brand">{post.gamme}</span>
                <h1>{post.name}</h1>
                <hr></hr>
                <p className='description'>Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature. </p>
                <span className="category">{post.category}</span>
                <span className="prix">{post.prix}€</span>
                <hr></hr>
                <div>
                  <h3>Ingrédients</h3>
                </div>
              </div>
            </div>
          </div>
        }
    </>
  )
}

export default PostItem