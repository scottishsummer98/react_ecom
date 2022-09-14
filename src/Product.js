import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Product({ id, title, price, image, rating }) {
  const [{}, dispatch] = useStateValue()

  const successToaster = () => {
    toast.success('Product item ' + title + ' is Added to your cart', {
      position: 'bottom-right',
      autoClose: 5000,
    })
  }
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <strong>৳</strong>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product_image" src={image} alt="" />
      <button
        onClick={() => {
          successToaster()
          addToBasket()
        }}
        className="product_button"
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Product
