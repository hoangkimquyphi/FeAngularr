import { Component } from '@angular/core';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent {
  products = [
    { name: 'Đồng hồ Rolex', price: 5000000, quantity: 2 },
    { name: 'Đồng hồ Omega', price: 7000000, quantity: 1 },
    { name: 'Đồng hồ Seiko', price: 2000000, quantity: 3 }
  ];

}
