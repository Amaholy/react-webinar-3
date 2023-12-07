import { useCallback, useContext, useEffect, useState } from "react";
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import ItemPage from "./item-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector((state) => state.modals.name);

  return (
    <>
      <Main />
      {activeModal === "basket" && <Basket />}
    </>
  );
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="item/:id" element={<ItemPage />} />
    </Routes>
    {activeModal === "basket" && <Basket />}
  </BrowserRouter>;
}

export default App;