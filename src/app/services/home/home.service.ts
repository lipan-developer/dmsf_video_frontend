import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  listPage(){
    return this.httpClient.post(environment.requestUrl+"/home/listPage", null)
  }

  getHotMovie(){
    return this.httpClient.post(environment.requestUrl+"/home/hotMovie", null)
  }
  getHotTelevision(){
    return this.httpClient.post(environment.requestUrl+"/home/hotTelevision", null)
  }
  getHotAnimation(){
    return this.httpClient.post(environment.requestUrl+"/home/hotAnimation", null)
  }

  getHot3ForAll(){
    return this.httpClient.post(environment.requestUrl+"/home/hot3ForAll", null)
  }

}
