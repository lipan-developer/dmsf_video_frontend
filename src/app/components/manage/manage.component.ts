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


  searchResult(page:Number,size:Number){
    this.getListPage(page,size)
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
    console.info(item)
    this.modal.open()
  }


  submitData(){
    this.item.updateUser = this.storageService.getItem('nickName')
    this.manageService.submitData(this.item).subscribe(data =>{
      this.modal.close();
      this.searchResult(1,10);}
    );
    
  }

  cancalSubmit(){
    this.item = {}
    this.modal.dismiss();
  }


  deleteData(item:any){
    this.item = item;
    this.manageService.deleteData(this.item.tableKey).subscribe(data =>{
      this.searchResult(1,10);}
    );
  }


  
}
