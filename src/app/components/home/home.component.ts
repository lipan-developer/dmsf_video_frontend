import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any=[];


  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.listPage().subscribe(data=>this.data = data)
  }




}
