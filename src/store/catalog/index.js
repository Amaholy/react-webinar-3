import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      currentPage: 1,
      pages: 0,
    };
  }

  async load(page = 1, limit = 10) {
    try {
      const response = await fetch(
        `api/v1/articles?limit=${limit}&skip=${
          limit * page - 10
        }&fields=items(_id,title,price),count`
      );
      const json = await response.json();
      const pages = Math.ceil(json.result.count / limit);
      this.setState(
        {
          ...this.getState(),
          list: json.result.items,
          pages,
          currentPage: page,
        },
        "Загружены товары из АПИ"
      );
    } catch (err) {
      console.warn(err);
    }
  }
}

export default Catalog;
