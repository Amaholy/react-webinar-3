import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { plural } from '../../utils'
function Controls({
  title,
  counter,
  sumOfItemsInCarts,
  setOpenModal,
  caption,
}) {
  const cartSummary =
    counter > 0
      ? `${counter} ${plural(counter, {
          one: 'товар',
          few: 'товара',
          many: 'товаров',
        })} / ${sumOfItemsInCarts} ₽`
      : 'пусто'

  return (
    <div className="Controls">
      <span>{title}</span>
      <span className="Controls-cart">{cartSummary}</span>
      <button onClick={() => setOpenModal(true)}>{caption}</button>
    </div>
  )
}

Controls.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.number,
  sumOfItemsInCarts: PropTypes.number,
  setOpenModal: PropTypes.func,
  caption: PropTypes.string,
}

Controls.defaultProps = {
  setOpenModal: () => {},
}

export default React.memo(Controls)
