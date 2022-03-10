import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedRoutingModule } from './app-shared/app-shared-routing.module';
import { HeaderComponent } from './app-shared/header/header.component';
import { BannerComponent } from './app-shared/banner/banner.component';
import { FooterComponent } from './app-shared/footer/footer.component';
import { LivreurComponent } from './app-livreur/livreur/livreur.component';
import { FormLivraisonCheckoutComponent } from './app-livraison/form-livraison-checkout/form-livraison-checkout.component';
import { MainLivraisonComponent } from './app-livraison/main-livraison/main-livraison.component';
import { AppLivraisonRoutingModule } from './app-livraison/app-livraison-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListLivraisonComponent } from './app-livreur/list-livraison/list-livraison.component';
import { AppLivreurRoutingModule } from './app-livreur/app-livreur-routing.module';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { HireLivreurComponent } from './app-livreur/hire-livreur/hire-livreur.component';
import { LivraisonComponent } from './app-livraison/livraison/livraison.component';
import { CartRoutingModule } from './app-cart/app-cart-routing.module';
import { AppCartModule } from './app-cart/app-cart.module';

import { MainProduitComponent } from './app-produit/main-produit/main-produit.component';
import { ShowOneProduitComponent } from './app-produit/show-one-produit/show-one-produit.component';
import { ProduitComponent } from './app-produit/produit/produit.component';
import {AppProduitModule} from "./app-produit/app-produit.module";
import { AppProviderModule } from './app-provider/app-provider.module';
import {AppLivraisonModule} from "./app-livraison/app-livraison.module";
import {AppLivreurModule} from "./app-livreur/app-livreur.module";

PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,



  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AppSharedRoutingModule,

    AppLivraisonModule,
    AppLivreurModule,
    CartRoutingModule,
    AppCartModule,
    HttpClientModule,
    AppProduitModule,
    AppProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
