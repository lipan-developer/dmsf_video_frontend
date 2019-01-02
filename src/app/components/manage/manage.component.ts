import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service'
import { ManageService } from '../../services/manage/manage.service'
import { BsModalBodyComponent } from 'ng2-bs3-modal';

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

  @ViewChild("modal") modal:any

  nickName:String;
  auth:String;
  title:String
  actor:String
  type:String = '0'
  data:any = {
    data:{
      content:[{}]
    }
  }
  totalPages:any
  item:any = {
    tableKey:String,
    title:String,
    actor:String,
    type:String ,
    showTime:Date,
    describeInfo:String ,
    picture:String,
    updateUser:String
  }
  ngOnInit() {
    this.getListPage(1,10);
  }


  getListPage(page:Number,size:Number){
    this.manageService.getSeachResult(page,size,this.title,this.actor,this.type).subscribe(
      data=>{
        this.data = data
        this.totalPages = []
        if (this.data.data.totalPages > 7) {
          // 首页显示 1，2，3，4，5，6，7，...
          if (page <= 7) {
            for (let i = 1; i <= 7; i++) {
              this.totalPages.push(i);
            }
            this.totalPages.push(8);
            this.totalPages.push('...')
          }
          if(page >= 8 && page <= this.data.data.totalPages -7){
            this.totalPages.push('...')
            for (let i = (Number)(page)-3; i <= (Number)(page)+ 3; i++) {
              this.totalPages.push(i);
            }
            this.totalPages.push('...')
          }
          if(page > this.data.data.totalPages -7){
            this.totalPages.push('...')
            for (let i = this.data.data.totalPages -7; i <= this.data.data.totalPages; i++) {
              this.totalPages.push(i);
            }
          }
          return
        }
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
    this.getListPage(1,10)
  }



  openModal(item:Object){
    this.item = item;
    if(!this.item) {
      this.item = {
        tableKey:String,
        title:String,
        actor:String,
        type:String ,
        showTime:String,
        describeInfo:String ,
        picture:String
      }
      this.item.type= '1'
      this.item.tableKey= ''
      this.item.actor= ''
      this.item.title= ''
      this.item.showTime= ''
      this.item.describeInfo= ''
      this.item.picture= ''
    }
    this.modal.open()
  }


  submitData(){
    this.item.updateUser = this.storageService.getItem('nickName')
    this.manageService.submitData(this.item).subscribe(data =>{
      this.modal.close();
      this.searchResult();}
    );
    
  }

  cancalSubmit(){
    this.item = {}
    this.modal.dismiss();
  }


  deleteData(item:any){
    this.item = item;
    this.manageService.deleteData(this.item.tableKey).subscribe(data =>{
      this.searchResult();}
    );
  }


  
}
