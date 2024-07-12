import { Component } from '@angular/core';
import { Phone } from './Phone';
import { PhoneCartService } from '../../phone-cart.service';
import { PhoneDataService } from '../phone-data.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrl: './phones-list.component.scss'
})
export class PhonesListComponent {
  phones : Phone[] = [];
  
  constructor(private cart: PhoneCartService, 
    private phonesService: PhoneDataService){
    }

  ngOnInit() : void {
    this.phonesService.getAll()
    .subscribe(data => this.phones = data);
  }
  
  addToCart(phone: Phone): void{
    this.cart.addToCart(phone);
    phone.stock -= phone.quantity;
    phone.quantity = 0;
  }



}