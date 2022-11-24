import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import {UserBasicResponseModel} from "../models/user-basic-response.model";
import {map} from "rxjs/operators";
import {UserBasicModel} from "../models/user-basic.model";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this._httpClient.post<UserModel>('https://fakestoreapi.com/users', user);
  }

  // getOne(id: string): Observable<UserResponseModel> {
  //   return this._httpClient.get<UserResponseModel>('https://fakestoreapi.com/users/' + id);
  // }

  getOne(id: string): Observable<UserBasicModel> {
    return this._httpClient.get<UserBasicResponseModel>('https://fakestoreapi.com/users/' + id).pipe(
      map((response: UserBasicResponseModel): UserBasicModel => ({
        email: response.email,
        firstname: response.name.firstname,
        lastname: response.name.lastname
      }))
    );
  }
}
