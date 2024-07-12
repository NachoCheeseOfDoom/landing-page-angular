import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//DATA
import { productData } from './products.data';
//SERVICE
import { ApiService } from '../services/api.service';
//MODULE
import { IProduct } from './../models/product.model';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    })
  }
}
