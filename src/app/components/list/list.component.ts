import { Component } from '@angular/core';
export interface Product {
  id: number;
  name: string;
  quantity: number;
  status: string;
  price: number;
  category: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 10,
      status: 'In stock',
      price: 100,
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 5,
      status: 'Out of stock',
      price: 200,
      category: 'Category 2'
    },
    {
      id: 1,
      name: 'Product 3',
      quantity: 10,
      status: 'In stock',
      price: 100,
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'Product 4',
      quantity: 5,
      status: 'Out of stock',
      price: 200,
      category: 'Category 2'
    },
    {
      id: 1,
      name: 'Product 5',
      quantity: 10,
      status: 'In stock',
      price: 100,
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'Product 6',
      quantity: 5,
      status: 'Out of stock',
      price: 200,
      category: 'Category 2'
    },
    // Add more products here...
  ];

  deleteProduct(id: number)  {
    // remove item out the list by id
   

    // Find the index of the product with the given id
  const index = this.products.findIndex(product => product.id === id);
  
  // If the product was found, remove it from the array
  if (index !== -1) {
    this.products.splice(index, 1);
  }
  }

  editProduct(id: number)   {
    // Define the logic for editing a product here 
    // get item by id then update data by id

    // Find the index of the product with the given id
  const index = this.products.findIndex(product => product.id === id);

  // If the product was found, update its properties
  if (index !== -1) {
    this.products[index].name = 'New Product Name';
    this.products[index].quantity = 20;
    this.products[index].status = 'In stock';
    this.products[index].price = 150;
    this.products[index].category = 'New Category';
  }

  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
}

