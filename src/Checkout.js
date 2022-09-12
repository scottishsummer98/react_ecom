import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="Banner1.jpg" alt="Checkout Ad" />

        <div className="checkout_info_details">
          <div>
            <h2 className="checkout_title">{user.email}'s Shopping Basket</h2>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
