import React from 'react'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating, quantity}) {

  const[{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
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
    <div className = 'checkoutProduct'>
        <img className = 'checkoutProduct_image' src = {image} alt = 'check' />

        <div className = 'checkoutProduct_info'>
            <p className = 'checkoutProduct_title'>{title}</p>

            <p className = 'checkoutProduct_price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>

            <div className = 'checkoutProduct_rating'>
              {
                Array(rating)
                .fill()
                .map((_,i) => (
                  <p>⭐</p>
                ))
              }
            </div>
      
            <button onClick = {addToCart}>+</button>
            <button onClick = {removeFromBasket}>-</button>
            
        </div>
    </div>
  )
}

export default CheckoutProduct
