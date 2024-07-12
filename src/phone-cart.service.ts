import { Injectable } from '@angular/core';
import { Phone } from './app/phones-list/Phone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneCartService {

  private _cartList: Phone[] = [];
  cartList: BehaviorSubject<Phone[]> = new BehaviorSubject([]);

  addToCart(phone: Phone) {
    let item: Phone = this._cartList.find(v1 => v1.name == phone.name) as Phone;
    if (phone.quantity > 0) {
      if (!item) {

        this._cartList.push({ ...phone });
      }
      else {
        item.quantity += phone.quantity;
      }
      this.cartList.next(this._cartList);
    }
  }

}
