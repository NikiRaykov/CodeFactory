import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../shared/product.model';
import { MEALS_TO_BUY } from '../shared/meals';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  product:ProductModel;

  constructor(private route:ActivatedRoute, private cartService: CartService) {

    let id = parseInt(this.route.snapshot.params['id']);

    if (isNaN(id)) {
      this.product = MEALS_TO_BUY[0];
    } else {  
      this.product = MEALS_TO_BUY[id];
    }
  }

  addToCart() {
    this.cartService.onAddToCart(this.product);
  }
}
