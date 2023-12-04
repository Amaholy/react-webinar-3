import React, { useCallback, useMemo, useState } from 'react'
import List from './components/list'
import Controls from './components/controls'
import Head from './components/head'
import PageLayout from './components/page-layout'
import Navigation from './components/navigation'
import { plural } from './utils'
import Cart from './components/cart'
import Modal from './components/modals'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list
  const cartList = store.getState().cartList
  const [isOpened, setIsOpened] = useState(false)

  const callbacks = {
    onDeleteFromCart: useCallback(
      (code) => {
        store.deleteFromCart(code)
      },
      [store]
    ),

    onAddToCart: useCallback(
      (item) => {
        store.addToCart(item)
      },
      [store]
    ),

    toggleModal: (state) => {
      setIsOpened(state)
    },
  }

  return (
    <PageLayout>
      <Head title="Магазин" />

      <Navigation
        onModalBtnClick={callbacks.toggleModal}
        navText={
          store.uniqueItems
            ? `${store.uniqueItems} ${plural(store.uniqueItems, {
                one: 'товар',
                few: 'товара',
                many: 'товаров',
              })}
            / 
            ${store.getTotalPrice()}
           `
            : 'Пусто'
        }
      />

      <List list={list} onClick={callbacks.onAddToCart} itemText="Добавить" />
      <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
        <Cart
          onModalBtnClick={callbacks.toggleModal}
          list={cartList}
          onClick={callbacks.onDeleteFromCart}
          totalPrice={store.getTotalPrice()}
        />
      </Modal>
    </PageLayout>
  )
}

export default App
