import React from 'react'
import PropTypes from 'prop-types'
import { cn as bem } from '@bem-react/classname'
import './style.css'
import Head from '../head'
import List from '../list'
import CartItem from '../cart/cart-item/index'

function Cart({ cart, setOpenModal, removeFromCart, sumOfItemsInCarts }) {
  const renderCartItems = () => {
    if (cart.length > 0) {
      return cart.map((item) => (
        <CartItem key={item.code} item={item} removeFromCart={removeFromCart} />
      ))
    }
    return null
  }

  return (
    <div className="Cart">
      <Head Header="Корзина" setOpenModal={setOpenModal} />

      {renderCartItems()}

      <div className="Cart-cash">
        <div className="Cart-sum">
          <span>Итого</span>
          <span className="Cart-summary">{`${sumOfItemsInCarts} ₽`}</span>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
  setOpenModal: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  sumOfItemsInCarts: PropTypes.number.isRequired,
}

export default React.memo(Cart)
