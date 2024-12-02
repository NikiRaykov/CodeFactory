import { Component } from '@angular/core';
import { MEALS_TO_BUY } from '../shared/meals';
import { ProductModel } from '../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: ProductModel[] = MEALS_TO_BUY
}
