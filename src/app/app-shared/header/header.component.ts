import { Component, OnInit } from '@angular/core';
import {Produit} from "../../core/model/produit";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product : Produit;
  constructor() { }

  nbrItems:string;
  ngOnInit(): void {
    this.nbrItems=localStorage.getItem('itemInCart')
    console.log(this.nbrItems);
    
  }

}
