import { Link } from 'react-router'

// CSS
import './shop.scss'

const ItemProduit = (props) => {
  return (
    <div key={props.uuid} className={'container-product fade-in-element product-' + props.categorieId}   >
        <div className='border border-scale-bot'>
            <div className='prix'>{props.prix}€</div>
        </div>
        <div  className='container-product-meta'>
        <Link to={'/shop/item/'+props.categorieId+'/'+props.uuid} className='product-image'>
            <img alt={props.name + ' ' + props.gamme} src={'http://localhost:5173/public/assets/img/'+(props.img)+'-350px.png'} />
        </Link>
        <div className='container-meta'>
            <h3 className='title-post-item'>{props.name}</h3>
            <div className='meta'>
            <span>{props.gamme}</span>
            <span>{props.format}ml</span>
            </div>
            <hr></hr>
            <p>Huile de douche aux huiles essentielles avec des notes d’agrumes.</p>
        </div>
        </div>
    </div>
  )
}

export default ItemProduit