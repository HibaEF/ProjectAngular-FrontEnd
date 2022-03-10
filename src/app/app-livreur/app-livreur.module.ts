import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HireLivreurComponent} from "./hire-livreur/hire-livreur.component";
import {ListLivraisonComponent} from "./list-livraison/list-livraison.component";
import {LivreurComponent} from "./livreur/livreur.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppLivreurRoutingModule} from "./app-livreur-routing.module";
import { LoginLivreurComponent } from './login-livreur/login-livreur.component';



@NgModule({
  declarations: [
    HireLivreurComponent,
    ListLivraisonComponent,
    LivreurComponent,
    LoginLivreurComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    AppLivreurRoutingModule
  ]
})
export class AppLivreurModule { }
