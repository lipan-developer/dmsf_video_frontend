import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  listPage(page:Number,size:Number){
    return this.httpClient.post(`${environment.requestUrl}/movie/listPage?page=${page}&size=${size}`, null)
  }

  getNewMovie(){
    return this.httpClient.post(environment.requestUrl+"/movie/newMovie", null)
  }


  getHotMovie(){
    return this.httpClient.post(environment.requestUrl+"/movie/hotMovie", null)
  }
}
