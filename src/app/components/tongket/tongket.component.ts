import { Component } from '@angular/core';

@Component({
  selector: 'app-tongket',
  templateUrl: './tongket.component.html',
  styleUrls: ['./tongket.component.css']
})
export class TongketComponent {
  totalSales: number = 10000;
  totalOrders: number = 250;
  totalCustomers: number = 500;
  recentOrders: string[] = ['Order #1234', 'Order #5678', 'Order #9012'];

  // chart data and configuration here
}
