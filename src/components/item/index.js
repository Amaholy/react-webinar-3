import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from '../../utils'
import './style.css'

function Item(props) {
  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">{formatNumber(props.item.price)}</div>
      <div className={props.item.count && 'Item-count'}>
        {props.item.count && `${props.item.count}\u00A0шт.`}
      </div>
      <div className="Item-actions">
        <button onClick={() => props.onClick(props.item.code)}>
          {props.itemText}
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    number: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
}

Item.defaultProps = {
  onClick: () => {},
}

export default React.memo(Item)
