import { Component, OnInit } from '@angular/core';
import { TelevisionService } from '../../services/television/television.service'

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  data:any = []
  openNewTelevision:boolean = false
  openHotTelevision:boolean = false
  type:String = '2'
  newTelevisions:object = {
    data:[]
  }
  hotTelevisions:object = {
    data:[]
  }

  constructor(private televisionService:TelevisionService) { }
  

  ngOnInit() {
    this.televisionService.listPage().subscribe(data => (this.data = data))
  }

  provinceOut(event: any) {
    this.data = event
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

}
