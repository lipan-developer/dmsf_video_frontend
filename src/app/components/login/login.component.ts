import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service'
import { StorageService } from '../../services/storage/storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService,private storageService:StorageService,private router:Router) {
    this.nickName = this.storageService.getItem('nickName');
   }

  error:any
  success:any
  nickName:String;
  password:String;
  data:any
  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.nickName,this.password).subscribe(
      data => {
        this.data = data
        if(this.data.code ==  '00001'){
          this.error = this.data.msg
        }
        if(this.data.code ==  '0000'){
          this.success = '恭喜,操作成功！'
          this.storageService.removeItem('auth')
          this.storageService.removeItem('nickName')
          this.storageService.setItem('auth',this.data.data.auth)
          this.storageService.setItem('nickName',this.nickName)
        }
        this.router.navigate(['home']); 
      }
    )
  }

}
