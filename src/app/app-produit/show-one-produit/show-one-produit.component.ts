import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../core/services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../../core/model/produit";
import { CartProduct } from 'src/app/core/model/CartProduct';
import { CartService } from 'src/app/core/services/cart-service/cart.service';

@Component({
  selector: 'app-show-one-produit',
  templateUrl: './show-one-produit.component.html',
  styleUrls: ['./show-one-produit.component.css']
})
export class ShowOneProduitComponent implements OnInit {

  cartProduct:CartProduct;
  //product:Produit;

  constructor(private productService:ProduitService, private router: Router, private activated:ActivatedRoute,private cartService:CartService) { }
  product:Produit;
  ngOnInit(): void {
    this.product=this.productService.currentProduct;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getProductServiceById(id).subscribe(
          (data:CartProduct) => {
            this.product = data
            this.cartProduct=data
            this.cartProduct.qte=0;
          }
        )
      }
    )
  }
  fixProduct(){
    this.router.navigate(['listProduit']);
  }

  addToCart(cp:CartProduct){
    this.cartService.addItem(cp);
  }

}
