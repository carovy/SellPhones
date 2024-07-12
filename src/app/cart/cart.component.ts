import { Component } from '@angular/core';
import { PhoneCartService } from '../../phone-cart.service';
import { Phone } from '../phones-list/Phone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Phone[]>;
 constructor(private cart: PhoneCartService){
    this.cartList$ = cart.cartList.asObservable();
 }
}
