import { Component,  OnInit } from '@angular/core';

export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;

  constructor(id: number, name: string, price: number, image: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }
}
@Component({
  selector: 'app-spham',
  templateUrl: './spham.component.html',
  styleUrls: ['./spham.component.css']
})
export class SphamComponent {
  cartItems: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize cart items array with some sample data
    this.cartItems.push(new Product(1, 'Watch', 99.99, 'https://salt.tikicdn.com/cache/w1200/ts/product/e4/9d/c9/9753d59e37b0b3ea2d446d9139bf6c67.jpg', 1));
    this.cartItems.push(new Product(2, 'Shirt', 24.99, 'https://cohoi.tuoitre.vn/upload/lib_item/021117_chondongho_1.jpg', 2));
    this.cartItems.push(new Product(3, 'Shoes', 59.99, 'https://cdn.tgdd.vn/Files/2019/08/11/1186682/tat-tan-tat-cac-loai-dong-ho-deo-tay-pho-bien-hien-nay-1.jpg', 1));
  }

  removeFromCart(item: Product) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal() {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
