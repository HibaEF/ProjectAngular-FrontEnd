import { Component, OnInit } from '@angular/core';
import {Produit} from "../../core/model/produit";
import {ProduitService} from "../../core/services/produit.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-main-produit',
  templateUrl: './main-produit.component.html',
  styleUrls: ['./main-produit.component.css']
})
export class MainProduitComponent implements OnInit {

  listProduct: Produit[];
  p:Produit;
  searchText:any;
  liked:boolean=false;
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduct: Produit // the parent component will send this input to the child (formProduct)
  constructor(private productService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue = "add new Product";

    /* this.productService.getListProductService().subscribe(
       (data:Produit[])=>this.listProduct=data
     )*/
    this.productService.getListProductService().subscribe(
      (data: Produit[]) => this.listProduct = data
    )


  }
  like(product: Produit): void{

   /* let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    console.log(this.listProduct)*/
    let i = this.listProduct.indexOf(product);
    this.productService.getProductServiceLiked(this.listProduct[i].id).subscribe(
      (data: Produit) => this.listProduct[i] = data
    )
    if(this.liked) {
      this.liked = false;
      this.listProduct[i].nbrLike--

    }
    else {
      this.liked = true
      this.listProduct[i].nbrLike++
    }
    console.log(this.liked)
  }




}



