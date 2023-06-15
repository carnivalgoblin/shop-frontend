export class product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  availability: string;

  constructor(id: number, name: string, price: number, description: string, category: string, availability: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.availability = availability;
  }
}
