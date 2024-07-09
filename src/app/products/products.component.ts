import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//DATA
import { productData } from './products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  data = productData;

}
