import { memo } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { NavLink } from "react-router-dom";
import { textByLang } from "../../utils";
import { numberFormat, plural } from "../../utils";
import "./style.css";

function BasketTool({ sum, amount, onOpen, lang }) {
  const cn = bem("BasketTool");
  return (
    <div className={cn()}>
      <NavLink to="/" className="BasketTool-navlink">
        {" "}
        {textByLang(lang).main}{" "}
      </NavLink>
      <div className="toRight">
        <span className={cn("label")}>{textByLang(lang).inBasket}:</span>
        <span className={cn("total")}>
          {amount
            ? `${amount} ${plural(amount, {
                one: "товар",
                few: "товара",
                many: "товаров",
              })} / ${numberFormat(sum)} ₽`
            : `пусто`}
        </span>
        <button onClick={onOpen}>Перейти</button>
      </div>
    </div>
  );
}
BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0,
};

export default memo(BasketTool);
