import React from 'react'
import Controls from '../controls'
import Head from '../head'
import List from '../list'
import Modal from '../modals'
import './style.css'

function Cart(props) {
  const { onModalBtnClick, list, onClick, totalPrice } = props

  return (
    <>
      <Head title="Корзина">
        <Controls onModalBtnClick={onModalBtnClick} btnText="Закрыть" />
      </Head>
      <List list={list} onClick={onClick} itemText="Удалить" />
      <div className="Cart-strong">
        <span>Итого:</span>
        {totalPrice}
      </div>
    </>
  )
}

export default React.memo(Cart)
