import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service'
import { ManageService } from '../../services/manage/manage.service'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private storageService:StorageService,private manageService:ManageService) { 
    this.nickName = this.storageService.getItem('nickName');
    this.auth = this.storageService.getItem('auth');
  }

  nickName:String;
  auth:String;
  title:String
  actor:String
  type:String
  data:any = {
    data:{
      content:[{}]
    }
  }
  totalPages:any
  ngOnInit() {
    this.getListPage(1,10);
  }


  getListPage(page:Number,size:Number){
    this.manageService.getSeachResult(1,10,this.title,this.actor,this.type).subscribe(
      data=>{
        this.data = data
        this.totalPages = []
        for(let i = 1; i <= this.data.data.totalPages; i++) {
           this.totalPages.push(i);
         }
      }
    )
  }

  cancalSearch(){
    this.title = ''
    this.actor = ''
    this.type = '0'
  }
  removeStorage(){
    this.storageService.removeItem('auth')
    this.storageService.removeItem('nickName')
    this.auth = ''
    this.nickName = ''
  }


  searchResult(){
    console.info(this.title)
    console.info(this.actor)
    console.info(this.type)
  }



}
