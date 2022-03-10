import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { CartService } from './core/services/cart-service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetMagasinFront';
  itemInCart:number;
  constructor(private auth: AuthService , private cartService:CartService) {
  }

  ngOnInit() {
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart=d.length;
      console.log(this.itemInCart);
    localStorage.setItem('itemInCart',String(this.itemInCart));
            
    })


  }
}
