import { useState } from "react";
import StoreModule from "../module";

function ProductDetails(store, name) {
  const [state, setState] = useState({
    current: "rus",
  });

  const options = { rus: "rus", eng: "eng" };

  async function setLanguage(id) {
    let lang = options[id];
    if (lang === undefined) lang = options["rus"];

    setState({
      ...state,
      current: lang,
    });

    console.log("Language chosen");
  }

  return {
    initState: () => ({
      current: "rus",
    }),
    setLanguage,
  };
}

export default ProductDetails;
