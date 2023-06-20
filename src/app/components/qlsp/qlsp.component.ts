import { Component } from '@angular/core';
interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}


@Component({
  selector: 'app-qlsp',
  templateUrl: './qlsp.component.html',
  styleUrls: ['./qlsp.component.css']
})

export class QlspComponent {
  products: Product[] = [
    { name: 'Product 1', price: 10, description: 'Description 1', image: 'https://www.doseco.vn/_next/image?url=https%3A%2F%2Fdoseco.vn%2Fmedia%2F2022-01%2F20190119_181120_DSC06418-.jpg&w=1200&q=75' },
    { name: 'Product 2', price: 20, description: 'Description 2', image: 'https://bdtwatch.com/images/revue-thommen/doNG-Ho-ReVue-THoMMeN-DiVeR-XL-17571-2229-175712229-result--70070001187232.jpg' },
    { name: 'Product 3', price: 30, description: 'Description 3', image: 'https://bdtwatch.com/images/revue-thommen/dong-Ho-Lan-Revue-Thommen-Diver-17571-2135-175712135-result--70070001177164.jpg' },
  ];

  newProduct: Product = { name: '', price: 0, description: '', image: '' };

  addProduct() {
    // Tạo một ID mới cho sản phẩm
    const id = this.products.length + 1;
    // Thêm sản phẩm mới vào danh sách
    this.products.push
    // Reset form
    this.newProduct = { name: '', price: 0, description: '', image: '' };
  }
}
