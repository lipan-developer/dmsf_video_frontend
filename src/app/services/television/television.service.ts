import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor(private httpClient:HttpClient) { }

  listPage(page:Number,size:Number){
    return this.httpClient.post(`${environment.requestUrl}/television/listPage?page=${page}&size=${size}`, null)
  }


  getNewTelevision(){
    return this.httpClient.post(environment.requestUrl+"/television/newTelevision", null)
  }

  getHotTelevision(){
    return this.httpClient.post(environment.requestUrl+"/television/hotTelevision", null)
  }
}
