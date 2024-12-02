import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
    productsFromCart:ProductModel[];
    total:number;

    constructor(private cartService:CartService){

      this.productsFromCart = cartService.getProducts();
      this.total = cartService.getTotal();
  }

   
}
