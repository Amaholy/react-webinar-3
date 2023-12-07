import React, { useCallback, memo } from "react";
import "./style.css";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { codeGenerator } from "../../utils";

function Pagination() {
  const keyGenerator = codeGenerator(0);
  const store = useStore();
  const select = useSelector((state) => ({
    list: state.catalog,
  }));

  const selectPage = useCallback(
    (page) => {
      store.actions.catalog.load(page);
    },
    [store]
  );

  const currPage = select.list.currentPage;
  const amountOfPages = select.list.pages;

  const clickHandler = (e, el) => {
    e.preventDefault();
    selectPage(el);
  };

  let pages = [];
  const buffer = "...";

  if (currPage <= 3) {
    pages = currPage === 3 ? [2, 3, 4, buffer] : [2, 3, buffer];
  } else if (currPage >= amountOfPages - 2) {
    pages = [buffer, amountOfPages - 3, amountOfPages - 2, amountOfPages - 1];
  } else {
    pages = [buffer, currPage - 1, currPage, currPage + 1, buffer];
  }

  const currListOfPages = [1, pages, amountOfPages].flat();

  return (
    <div className="pagination">
      {currListOfPages.map((el) => (
        <div
          key={keyGenerator()}
          className={`pagination-number${el === currPage ? " active" : ""}`}
          onClick={(e) => clickHandler(e, el)}
        >
          {typeof el === "number" ? el : buffer}
        </div>
      ))}
    </div>
  );
}

export default memo(Pagination);
