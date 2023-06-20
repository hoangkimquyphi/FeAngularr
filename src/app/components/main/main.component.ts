import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productList = [
    { id: 1, name: 'Đồng hồ Rolex', price: 1000 },
    { id: 2, name: 'Đồng hồ Omega', price: 800 },
    { id: 3, name: 'Đồng hồ Casio', price: 100 },
    {id:4, name: 'Đồng hồ casio', price: 900},
    {id:5, name: ' Đồng hồ omega', price:500},
  ];
}
