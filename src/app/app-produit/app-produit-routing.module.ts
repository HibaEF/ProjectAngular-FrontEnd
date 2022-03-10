import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MainProduitComponent} from "./main-produit/main-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {ShowOneProduitComponent} from "./show-one-produit/show-one-produit.component";

const routes: Routes = [
  {path: 'produit',component:ProduitComponent},
  {path: 'listProduit',component:MainProduitComponent},
  {path: 'listProduit/:id',component:ShowOneProduitComponent},

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppProduitRoutingModule { }
