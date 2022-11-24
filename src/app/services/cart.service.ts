import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CartModel} from "../models/cart.model";
import {CartResponseModel} from "../models/cart-response.model";

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<CartModel> {
    return this._httpClient.get<CartResponseModel>('https://fakestoreapi.com/carts/' + id).pipe(
      map((response: CartResponseModel): CartModel => ({
        products: response.products.length
      }))
    );
  }
}
