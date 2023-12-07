import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { numberFormat } from "../../utils";
import useSelector from "../../store/use-selector";

function ItemDetails({ item, addToBasket }) {
  const select = useSelector((state) => ({
    lang: state.language.current,
  }));

  const callbacks = {
    onAdd: () => addToBasket(item._id),
  };

  return (
    <section className={"item-details"} style={styles.itemDetails}>
      <div className={"item-details_text"} style={styles.itemDetailsText}>
        {item.description}
      </div>
      <div className={"item-details_text"} style={styles.itemDetailsText}>
        Страна-производитель:{" "}
        <b>{`${item.madeIn?.title} (${item.madeIn?.code})`}</b>
      </div>
      <div className={"item-details_text"} style={styles.itemDetailsText}>
        Категория: <b>{`${item.category?.title}`}</b>
      </div>
      <div className={"item-details_text"} style={styles.itemDetailsText}>
        Год выпуска: <b>{`${item.edition}`}</b>
      </div>
      <div className={"item-details_price"} style={styles.itemDetailsPrice}>
        <b>{`Цена: ${numberFormat(item.price)} ₽`}</b>
      </div>
      <div className={"item-details_text"}>
        <button onClick={callbacks.onAdd}>
          {" "}
          {textByLang(select.lang).button}
        </button>
      </div>
    </section>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    edition: PropTypes.number,
  }).isRequired,
  addToBasket: PropTypes.func,
};

ItemDetails.defaultProps = {
  addToBasket: () => {},
};

export default memo(ItemDetails);
