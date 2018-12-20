import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(private httpClient:HttpClient) { }


  getSeachResult(page:Number,size:Number,title:String,actor:String,type:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/listPage`,{
      page:page,
      size:size,
      title:title,
      actor:actor,
      type:type
    })
  }


}
