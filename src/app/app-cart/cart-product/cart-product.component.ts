import { Component, OnInit , Output,Input, EventEmitter} from '@angular/core';
import { CartProduct } from 'src/app/core/model/CartProduct';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor() { }
  @Input()produit : CartProduct;
  @Input()i : number;
  @Input()$event : any;
  @Output()deleteEvent=new EventEmitter<any>(); 
  @Output()validateInputEvent=new EventEmitter<any[]>(); 
  ngOnInit(): void {
  }
  onDelete(){
    this.deleteEvent.emit(this.i);
  }
  validateInput(){
    this.validateInputEvent.emit([this.i,this.$event])
  }

}
