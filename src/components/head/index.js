import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./style.css";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { textByLang } from "../../utils";

function Head({ title }) {
  const store = useStore();

  const callbacks = {
    // Выбираем язык
    selectLang: useCallback(
      (id) => store.actions.language.setLanguage(id),
      [store.language]
    ),
  };

  const select = useSelector((state) => ({
    lang: state.language.current,
  }));

  const changeHandler = (e) => {
    callbacks.selectLang(e.target.value);
  };

  return (
    <div className="head">
      <h1>{title === "Магазин" ? textByLang(select.lang).header : title}</h1>
      <select className="language" onChange={changeHandler} value={select.lang}>
        <option value="rus"> Rus </option>
        <option value="eng"> Eng </option>
      </select>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
};

export default memo(Head);
