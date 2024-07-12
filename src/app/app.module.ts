import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PhonesStoreComponent } from './phones-store/phones-store.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PhonesListComponent,
    InputIntegerComponent,
    CartComponent,
    PhonesStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
