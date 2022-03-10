import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductTestComponent } from './product-test/product-test.component';
import { ProductDetailTestComponent } from './product-detail-test/product-detail-test.component';

const routes: Routes = [
    {path: 'cart',component:CartComponent},
    {path: 'test-products',component:ProductTestComponent},
  {path: 'test-products/:id',component:ProductDetailTestComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
