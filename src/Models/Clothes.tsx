export class Clothes {
  id: number;
  name: string;
  size: string;
  price: number;
  description: string;
  photo: string;
  constructor(
    id: number,
    name: string,
    size: string,
    price: number,
    description: string,
    photo: string
  ) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
    this.description = description;
    this.photo = photo;
  }
}
