import { Component, OnInit } from '@angular/core';
import { TelevisionService } from '../../services/television/television.service'
import { CommonService } from '../../services/common/common.service'
import { StorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

   data:any = {
    data:{
      totalPages:String,
      content: [{
        picture: String
      }]
    }
  }
  openNewTelevision:boolean = false
  openHotTelevision:boolean = false
  type:String = '2'
  newTelevisions:object = {
    data:[]
  }
  hotTelevisions:object = {
    data:[]
  }
  totalPages:any = []
  constructor(private televisionService:TelevisionService,private commonService : CommonService,private storageService :StorageService) { }
  

  ngOnInit() {
    this.getListPage(1,12)
  }


getListPage(page:Number,size:Number){
    this.televisionService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
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
      })
  }

  provinceOut(event: any) {
    this.data = event
    this.totalPages = []
    if (this.data.data.totalPages > 7) {
      // 首页显示 1，2，3，4，5，6，7，...
      if (this.data.data.pageable.pageNumber + 1 <= 7) {
        for (let i = 1; i <= 7; i++) {
          this.totalPages.push(i);
        }
        this.totalPages.push(8)
        this.totalPages.push('...')
      }
      if(this.data.data.pageable.pageNumber + 1 >= 8 && this.data.data.pageable.pageNumber + 1 <= this.data.data.totalPages -7){
        this.totalPages.push('...')
        for (let i = (Number)(this.data.data.pageable.pageNumber + 1)-3; i <= (Number)(this.data.data.pageable.pageNumber + 1)+ 3; i++) {
          this.totalPages.push(i);
        }
        this.totalPages.push('...')
      }
      if(this.data.data.pageable.pageNumber + 1 > this.data.data.totalPages -7){
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
  getNewTelevision(){
    this.openNewTelevision = !this.openNewTelevision
    if(this.openNewTelevision){
      this.televisionService.getNewTelevision().subscribe(data=>this.newTelevisions = data)
    }else{
      this.newTelevisions = { data:[] }
    }
  }
  getHotTelevision(){
    this.openHotTelevision = !this.openHotTelevision
    if(this.openHotTelevision){
      this.televisionService.getHotTelevision().subscribe(data=>this.hotTelevisions = data)
    }else{
      this.hotTelevisions = { data:[] }
    }
  }
  addsupport(tableKey:String){
    let nickName = this.storageService.getItem('nickName')
    if(!nickName) return ;
    this.commonService.addsupport(tableKey).subscribe(
      data=>{
        this.getListPage(1,12)
      }
    )
  }
}
