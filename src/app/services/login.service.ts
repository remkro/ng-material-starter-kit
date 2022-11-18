import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  login(login: LoginModel): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>('https://fakestoreapi.com/auth/login', login);
  }
}
