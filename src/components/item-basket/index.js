import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { numberFormat } from "../../utils";
import { cn as bem } from "@bem-react/classname";
import { NavLink } from "react-router-dom";
import useSelector from "../../store/use-selector";
import { textByLang } from "../../utils";
import "./style.css";

function ItemBasket({ item, onRemove }) {
  const select = useSelector((state) => ({
    lang: state.language.current,
  }));

  const cn = bem("ItemBasket");

  const callbacks = {
    onRemove: () => onRemove(item._id),
  };

  return (
    <div className={cn()}>
      <NavLink to={`/item/${item._id}`} className={cn("title")}>
        {item.title}
      </NavLink>
      <div className={cn("right")}>
        <div className={cn("cell")}>{numberFormat(item.price)} ₽</div>
        <div className={cn("cell")}>{numberFormat(item.amount || 0)} шт</div>
        <div className={cn("cell")}>
          <button onClick={callbacks.onRemove}>
            {textByLang(select.lang).delete}
          </button>
        </div>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func,
};

ItemBasket.defaultProps = {
  onRemove: () => {},
};

export default memo(ItemBasket);
