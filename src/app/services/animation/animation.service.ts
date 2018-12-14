import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private httpClient:HttpClient) { }

  listPage(page:Number,size:Number){
    return this.httpClient.post(`${environment.requestUrl}/animation/listPage?page=${page}&size=${size}`, null)
  }


  getNewAnimation(){
    return this.httpClient.post(environment.requestUrl+"/animation/newAnimation", null)
  }

  getHotAnimation(){
    return this.httpClient.post(environment.requestUrl+"/animation/hotAnimation", null)
  }
}
