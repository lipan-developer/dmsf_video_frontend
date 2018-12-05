import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {


  requestUrl:String = 'http://127.0.0.1:8080'

  constructor() { }

  ngOnInit() {
  }

}
