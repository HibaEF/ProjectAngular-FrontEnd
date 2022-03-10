import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLivraisonComponent } from './main-livraison/main-livraison.component';
import { FormLivraisonCheckoutComponent } from './form-livraison-checkout/form-livraison-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
  {path:'livraison/:id', component: MainLivraisonComponent},
  {path:'add-livraison', component: FormLivraisonCheckoutComponent},
  {path:'livraison', component: LivraisonComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppLivraisonRoutingModule { }
