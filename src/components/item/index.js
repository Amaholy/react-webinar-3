import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Item({ item, addItemToCart }) {
  const handleAddItemToCart = () => {
    addItemToCart(item)
  }

  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-actions">
        <span className="Item-price">{`${item.price} ₽`}</span>
        <button onClick={handleAddItemToCart}>Добавить</button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
}

export default React.memo(Item)
