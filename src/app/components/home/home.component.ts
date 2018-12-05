import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service'
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any=[];


  constructor(private homeService:HomeService,private httpClient:HttpClient) { }

  ngOnInit() {
    this.homeService.listPage().subscribe(data=>this.data = data)
    // this.httpClient.post("http://127.0.0.1:8080/video/listPage", null).subscribe(data=>this.data = data)
  }




}
