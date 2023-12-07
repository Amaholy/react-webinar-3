import { memo } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { numberFormat, textByLang } from "../../utils";
import { NavLink } from "react-router-dom";
import "./style.css";
import useSelector from "../../store/use-selector";

function Item({ item, onAdd }) {
  const cn = bem("Item");

  const callbacks = {
    onAdd: () => onAdd(item._id),
  };

  const select = useSelector((state) => ({
    lang: state.language.current,
  }));

  return (
    <div className={cn()}>
      <NavLink to={`/item/${item._id}`} className={cn("title")}>
        {item.title}
      </NavLink>
      <div className={cn("actions")}>
        <div className={cn("price")}>{numberFormat(item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>
          {textByLang(select.lang).button}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => {},
};

export default memo(Item);
