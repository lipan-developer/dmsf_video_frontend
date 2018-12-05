import { Component, OnInit } from '@angular/core';
import { TelevisionService } from '../../services/television/television.service'

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  data:any = []

  constructor(private televisionService:TelevisionService) { }
  

  ngOnInit() {
    this.televisionService.listPage().subscribe(data => (this.data = data))
  }

}
