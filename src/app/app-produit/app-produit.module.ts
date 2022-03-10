import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowOneProduitComponent} from "./show-one-produit/show-one-produit.component";
import {ProduitComponent} from "./produit/produit.component";
import {MainProduitComponent} from "./main-produit/main-produit.component";
import {AppProduitRoutingModule} from "./app-produit-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ShowOneProduitComponent,
    ProduitComponent,
    MainProduitComponent
  ],
  imports: [
    CommonModule,
    AppProduitRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AppProduitModule { }
