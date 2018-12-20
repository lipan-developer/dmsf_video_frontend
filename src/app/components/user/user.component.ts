import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service'
import { StorageService } from '../../services/storage/storage.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService,private storageService:StorageService,private router:Router) { }

  ngOnInit() {
    this.auth = this.storageService.getItem('auth')
    this.nickName = this.storageService.getItem('nickName')
  }

  data:any = {
    code:String
  }
  error:any
  success:any
  nickName:String;
  password:String;
  phone:String;
  repeatPassword:String;
  auth:String
  
  editUser(){
    this.userService.editUser(this.nickName,this.password,this.phone,this.repeatPassword).subscribe(
      data=>{
        this.data = data;
        if(this.data.code ==  '00001'){
          this.error = this.data.msg
        }
        if(this.data.code ==  '0000'){
          this.success = '恭喜,操作成功！'
          this.storageService.setItem('auth','0')
          this.storageService.setItem('nickName',this.nickName)
        }
        this.password = '',this.phone ='',this.repeatPassword = ''
        this.router.navigate(['home']); 
      })
  }


  removeStorage(){
    this.storageService.removeItem('auth')
    this.storageService.removeItem('nickName')
    this.auth = ''
    this.nickName = ''
  }
}
