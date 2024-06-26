import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {

  const [{}, dispatch] = useStateValue()


  const Toggle = () => {
    dispatch({
      type: 'TOGGLE_CART_ITEM', 
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className = 'product'>
        <div className = 'product_info' >
      <p>{title}</p>
      <p className = 'product_price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className = 'product_rating'>
        {
            Array(rating)
            .fill()
            .map((_) => (
                <p>⭐</p>
            ))
        }
      </div>
      </div>
      <img src={image} alt = 'product' />
      <button onClick = {Toggle}>Add or Remove</button>
    </div>
  )
}

export default Product
