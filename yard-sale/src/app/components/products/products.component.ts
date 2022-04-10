import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '5',
      name: 'Product 5',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '6',
      name: 'Product 6',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '7',
      name: 'Product 7',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '8',
      name: 'Product 8',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '1',
      name: 'Product 1',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '5',
      name: 'Product 5',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '6',
      name: 'Product 6',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '7',
      name: 'Product 7',
      image: 'https://picsum.photos/200',
      price: 20
    },
    {
      id: '8',
      name: 'Product 8',
      image: 'https://picsum.photos/200',
      price: 20
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
