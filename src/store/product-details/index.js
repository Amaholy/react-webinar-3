import { useState, useEffect } from "react";
import StoreModule from "../module";

function ProductDetails(store, name) {
  const [details, setDetails] = useState({});

  function initState() {
    return {
      details: {},
    };
  }

  async function loadItem(id) {
    try {
      const response = await fetch(
        `api/v1/articles/${id}?fields=edition,dateCreate,description,madeIn(title,code),category(title),price,title`
      );
      const json = await response.json();

      setDetails({
        ...details,
        details: json.result,
      });

      console.log("Загружен товар из АПИ");
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    initState();
  }, []);

  return {
    initState,
    loadItem,
  };
}

export default ProductDetails;
