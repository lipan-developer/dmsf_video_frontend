import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }


  getSeachResult(searchValue:String,type:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/common/getSeachResult?searchValue=${searchValue}&type=${type}&page=1&size=10`,null)
  }


  getSeachResultListPage(searchValue:String,type:String,page:Number,size:Number){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/common/getSeachResult?searchValue=${searchValue}&type=${type}&page=${page}&size=${size}`,null)
  }


  addsupport(tableKey:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/common/addsupport?tableKey=${tableKey}`,null)
  }
}
