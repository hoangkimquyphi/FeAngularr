import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

export class ProductService {

  currentProduct: Product = {
    name: '',
    price: 0,
    description: '',
    image: ''
  };

  saveProduct() {
    // TODO: Add code to save product
  }

  cancelProduct() {
    // TODO: Add code to cancel adding product
  }

  handleImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.currentProduct.image = reader.result as string;
    };

  }
}


  
 