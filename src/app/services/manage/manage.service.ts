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


  submitData(item:Object){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/editData`,item)
  }

  deleteData(tableKey:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/deleteData?tableKey=${tableKey}`,null)
  }



  getManageDetails(page:Number,size:Number,masterKey:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/manageDetails/query`,{
      page:page,
      size:size,
      masterKey:masterKey
    })
  }


  submitDetailsData(item:Object){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/manageDetails/add`,item)
  }


  deleteDetailsData(tableKey:String){
    return this.httpClient.post(`${environment.requestUrl}/dmsf/manage/manageDetails/delete?tableKey=${tableKey}`,null)
  }
}
