import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private httpClient:HttpClient) { }

  listPage(){
    return this.httpClient.post(environment.requestUrl+"/animation/listPage", null)
  }
}
