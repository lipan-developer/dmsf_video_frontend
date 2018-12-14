import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }


  getSeachResult(searchValue:String,type:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/common/getSeachResult?searchValue=${searchValue}&type=${type}`,null)
  }

}
