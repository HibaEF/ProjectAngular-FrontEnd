import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLivraisonComponent} from "./main-livraison/main-livraison.component";
import {LivraisonComponent} from "./livraison/livraison.component";
import {FormLivraisonCheckoutComponent} from "./form-livraison-checkout/form-livraison-checkout.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppLivraisonRoutingModule} from "./app-livraison-routing.module";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    MainLivraisonComponent,
    LivraisonComponent,
    FormLivraisonCheckoutComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    AppLivraisonRoutingModule,
    BrowserModule

  ]
})
export class AppLivraisonModule { }
