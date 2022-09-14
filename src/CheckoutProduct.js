import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue()
  const dangerToaster = () => {
    toast.error('Product item ' + title + ' is removed from your cart', {
      position: 'bottom-right',
      autoClose: 5000,
    })
  }
  const removeFromBasket = () => {
    console.log('Removed ' + id)
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <strong>৳</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={() => {
            dangerToaster()
            removeFromBasket()
          }}
          className="checkoutProduct_info_button"
        >
          Remove From Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
