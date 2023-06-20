import { Component} from '@angular/core';
interface Product {
  name: string;
  description: string;
  price: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [{
    name: "Đồng hồ 1",
    description: "Mô tả đồng hồ 1",
    price: 1000000
  }, {
    name: "Đồng hồ 2",
    description: "Mô tả đồng hồ 2",
    price: 2000000
  }];

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  
}





  


 

