import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductsComponent
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent  
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: '/product-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
