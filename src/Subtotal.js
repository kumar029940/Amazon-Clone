import React from 'react'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subTotal'>
            <p>
                Subtotal ({basket.length} items): <strong>{`$ ${getBasketTotal(basket).toFixed(2)}`}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox' /> This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
