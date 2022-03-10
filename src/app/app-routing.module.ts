import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLivraisonRoutingModule } from './app-livraison/app-livraison-routing.module';
import { FormLivraisonCheckoutComponent } from './app-livraison/form-livraison-checkout/form-livraison-checkout.component';
import { LivraisonComponent } from './app-livraison/livraison/livraison.component';
import { MainLivraisonComponent } from './app-livraison/main-livraison/main-livraison.component';
import { AppLivreurRoutingModule } from './app-livreur/app-livreur-routing.module';
import { ListLivraisonComponent } from './app-livreur/list-livraison/list-livraison.component';
import { CartRoutingModule } from './app-cart/app-cart-routing.module';
import {AppProduitRoutingModule} from "./app-produit/app-produit-routing.module";
import { AppProviderRoutingModule } from './app-provider/app-provider-routing.module';

const routes: Routes = [
  
  {path: 'provider',
      loadChildren: () =>import('./app-provider/app-provider.module').then(m => m.AppProviderModule)},
    {path: 'livraison',
    loadChildren: () =>import('./app-livraison/app-livraison.module').then(m => m.AppLivraisonModule)},
    {path: 'livreur',
    loadChildren: () =>import('./app-livreur/app-livreur.module').then(m => m.AppLivreurModule)},
    {path: 'produit',
    loadChildren: () =>import('./app-produit/app-produit.module').then(m => m.AppProduitModule)},
    {path: 'panier',
    loadChildren: () =>import('./app-cart/app-cart.module').then(m => m.AppCartModule)}
    /* {path: 'user',
    loadChildren: () =>import('./user/user.module').then(m => m.UserModule)},
{path: '**',component: AppComp }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AppLivraisonRoutingModule,
  AppLivreurRoutingModule,


  CartRoutingModule,
    AppProduitRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
