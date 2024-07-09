import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { productData, Product } from '../products/products.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  product?: Product;
  Data: Product[] = productData;
  loading: boolean = true;
  color: string = '';


  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      setTimeout(() => {
        this.product = this.Data.find(product => product.id === +params['productId'])
        this.color = this.product?.price as number > 10 ? 'red' : 'blue';
        this.loading = false;
      }, 500);
    })
  }

}
