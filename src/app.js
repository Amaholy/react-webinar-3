import React, { useCallback, useEffect, useState } from 'react'
import List from './components/list/index'
import Controls from './components/controls/index'
import Head from './components/head/index'
import PageLayout from './components/page-layout/index'
import Item from './components/item/index'
import Cart from './components/cart/index'
import Modal from './components/modals/index'

function App({ store }) {
  const [list, setList] = useState(store.getState().list)
  const [openModal, setOpenModal] = useState(false)
  const cart = store.getState().cart
  const sumOfItemsInCarts = store.getState().sumOfItemsInCarts
  const counter = store.getState().counter

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { list, cart, sumOfItemsInCarts, counter } = store.getState()
      setList(list)
    })

    return () => {
      unsubscribe()
    }
  }, [store])

  const callbacks = {
    addItemToCart: useCallback(
      (item) => {
        store.addToCart(item)
      },
      [store]
    ),

    removeFromCart: useCallback(
      (item) => {
        store.removeFromCart(item)
      },
      [store]
    ),
  }

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls
        caption={'Перейти'}
        title={'В корзине:'}
        setOpenModal={setOpenModal}
        counter={counter}
        sumOfItemsInCarts={sumOfItemsInCarts}
      />
      <List>
        {list.map((item) => (
          <Item
            key={item.code}
            item={item}
            addItemToCart={callbacks.addItemToCart}
          />
        ))}
      </List>
      {openModal && (
        <Modal>
          <Cart
            cart={cart}
            setOpenModal={setOpenModal}
            sumOfItemsInCarts={sumOfItemsInCarts}
            removeFromCart={callbacks.removeFromCart}
          />
        </Modal>
      )}
    </PageLayout>
  )
}

export default App
