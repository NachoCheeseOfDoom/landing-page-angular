import { IProduct } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

//PRODUCT DATA
// import { productData, Product } from '../products/products.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {


  product?: IProduct;
  loading: boolean = true;
  color: string = '';


  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }



  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {

        // this.product = this.Data.find(product => product.id === +params['productId'])
        console.log(params)
        this._apiService.getProductById(+params['productId']).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = this.product?.price as number > 105 ? 'red' : 'blue';
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error)
            console.log(error.message)
            this.loading = false;
          },
        })
      }
    })
  }

}
