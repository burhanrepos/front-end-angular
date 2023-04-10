import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPriceModel } from './price.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  public getPriceData(payload: IPriceModel) {
    return this.http.post(`https://adminbackend.pakistansweethome.org.pk/api/test`, payload);
  }
}
