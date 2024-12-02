import { Injectable } from '@angular/core';
import { ProductModel } from './shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:ProductModel[] = [];
  
  constructor() {}
  
  getProducts(){
    return this.cartItems.slice();
  }

   onAddToCart(incomingProduct:ProductModel){
      this.cartItems.push(incomingProduct);
   }

   getTotal() {
    return this.cartItems.reduce((a, b) => a += b.price * b.qtty, 0);
   }

}
