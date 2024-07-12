import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Phone } from './phones-list/Phone';

const URL = "https://66907a26c0a7969efd9c2c0a.mockapi.io/api/phones/products";

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Phone[]> {
    return this.http.get<Phone[]>(URL)
            .pipe(
              tap((phones: Phone[]) => phones.forEach(phone => phone.quantity = 0))
            );
  }

}
