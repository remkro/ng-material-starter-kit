import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactModel } from '../models/cat-fact.model';

@Injectable()
export class CatFactService {
  constructor(private _httpClient: HttpClient) {
  }

  getFact(): Observable<CatFactModel> {
    return this._httpClient.get<CatFactModel>("https://catfact.ninja/fact");
  }
}
