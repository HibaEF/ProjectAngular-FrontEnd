import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivreurComponent } from './livreur/livreur.component';
import { HireLivreurComponent } from './hire-livreur/hire-livreur.component';
import { LoginLivreurComponent } from './login-livreur/login-livreur.component';



const routes: Routes = [
  {path:'list-livraison/:id', component: ListLivraisonComponent},
  {path:'livreur', component: ListLivraisonComponent},
  {path:'hire', component: HireLivreurComponent},
  {path:'espaceLivreur', component: LoginLivreurComponent}


];


@NgModule({

  imports: [
    RouterModule.forRoot(routes),

    /*ReactiveFormsModule,
    FormsModule*/
  ],
  exports: [RouterModule]
})
export class AppLivreurRoutingModule { }
