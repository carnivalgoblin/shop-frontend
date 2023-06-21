import {product} from "./product";

export class cart {
  id: number;
  items: product;

  constructor(id: number, items: product) {
    this.id = id;
    this.items = items;
  }
}
