import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productList = [
    { name: 'Đồng Hồ', price: 10000 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 }
  ];

}
