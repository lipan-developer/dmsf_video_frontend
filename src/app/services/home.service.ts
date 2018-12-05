import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  result:any=[];
  // requestUrl:String = 'http://127.0.0.1:8080'
  constructor(private httpClient:HttpClient) { }

  listPage(){
    // this.httpClient.post(this.requestUrl+"/video/listPage", null).subscribe(data=>console.info(data))
    return this.httpClient.post(environment.requestUrl+"/video/listPage", null)
  }
}
