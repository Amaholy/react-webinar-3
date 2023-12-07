import { memo, useCallback, useEffect } from "react";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/item-details";

function CurrentItem() {
  const { id } = useParams();

  const store = useStore();

  useEffect(() => {
    store.actions.item.loadItem(id);
  }, [id, store.actions.item]);

  const { amount, sum, item, lang } = useSelector((state) => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    item: state.item.details,
    lang: state.language.current,
  }));

  const callbacks = {
    addToBasket: useCallback(
      (itemId) => store.actions.basket.addToBasket(itemId),
      [store]
    ),

    openModalBasket: useCallback(
      () => store.actions.modals.open("basket"),
      [store.actions.modals]
    ),
  };

  return (
    <PageLayout>
      <Head title={item?.title || "Loading..."} />
      <BasketTool
        onOpen={callbacks.openModalBasket}
        amount={amount}
        lang={lang}
        sum={sum}
      />
      <ItemDetails item={item} addToBasket={callbacks.addToBasket} />
    </PageLayout>
  );
}

export default memo(CurrentItem);
