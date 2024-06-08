import React from "react";
import { useStateValue } from "./StateProvider";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();


  return (
  <div className = 'checkout'>
    <div className = 'checkout_left'>
    <img className = 'checkout_ad' src = 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt = 'checkout' />
    {basket?.length === 0 ? (
        <h2>Your Cart is Empty</h2>
    ) : (
        <div>
          <h2 className = 'checkout_title'>Your Cart</h2>
            
            {basket?.map((item, index) => (
                <CheckoutProduct
                key = {index}
                id = {item.id}
                title = {item.title}
                price = {item.price}
                image = {item.image}
                rating = {item.rating}
                />
            ))}
        </div>
    )}
    </div>
    {basket.length > 0 && (
      <div className = 'checkout_right'>
        <Subtotal />
      </div>
    )}
    </div>
  )
}

export default Checkout;