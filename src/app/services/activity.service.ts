import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityModel } from '../models/activity.model';

@Injectable()
export class ActivityService {
  constructor(private _httpClient: HttpClient) {
  }

  getActivity(): Observable<ActivityModel> {
    return this._httpClient.get<ActivityModel>('https://www.boredapi.com/api/activity');
  }
}
