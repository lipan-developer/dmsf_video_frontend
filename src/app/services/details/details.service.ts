import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod'
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient:HttpClient) { }

  getVideoDetails(tablekey:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/details/?tableKey=${tablekey}`,null)
  }
}
