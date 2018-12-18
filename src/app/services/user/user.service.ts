import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  editUser(nickName: String,
    password: String,
    phone: String,
    repeatPassword: String) {
    return this.httpClient.post(`${environment.requestUrl}/dmsf/user/editUser`, {nickName:nickName,password:password
    ,phone:phone,repeatPassword:repeatPassword})
  }


}
