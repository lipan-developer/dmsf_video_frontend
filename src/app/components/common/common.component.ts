import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common/common.service'
import { StorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Output() provinceOut = new EventEmitter();
  
  searchValue: String = ''
  auth:String
  nickName:String

  searchResp:object = {
    data:[]
  }
  @Input() type:any
  @Input() run:any
  constructor(private commonService: CommonService,private storageService:StorageService) { }

  ngOnInit() {
    this.auth = this.storageService.getItem('auth')
    this.nickName = this.storageService.getItem('nickName')
  }

  getSeachResult() {
    this.commonService.getSeachResult(this.searchValue,this.type).subscribe(data => {
      this.provinceOut.emit(data);
    })
  }


  getListPage(type:String,page:Number,size:Number){
    this.commonService.getSeachResultListPage(this.searchValue,type,page,size).subscribe(data => {
      this.provinceOut.emit(data);
    })
  }


  removeStorage(){
    this.storageService.removeItem('auth')
    this.storageService.removeItem('nickName')
    this.auth = ''
    this.nickName = ''
  }
}
