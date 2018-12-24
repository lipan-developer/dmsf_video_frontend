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
    this.getListPage(1,10)
  }


getListPage(page:Number,size:Number){
    this.televisionService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
       for(let i = 1; i <= this.data.data.totalPages; i++) {
         this.totalPages.push(i);
       }
      })
  }

  provinceOut(event: any) {
    this.data = event
    this.totalPages = []
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
    if(this.openNewTelevision){
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
        this.getListPage(1,10)
      }
    )
  }
}
