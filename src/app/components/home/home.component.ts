import { Component, OnInit, Output } from '@angular/core';
import { HomeService } from '../../services/home/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data: any = {
    data:{
      totalPages:String,
      content: [{
        picture: String
      }]
    }
  }
  hotMovies: object = {
    data: [{
      picture: String
    }]
  }
  hotTelevisions: object = {
    data: [{
      picture: String
    }]
  }
  hotAnimations: object = {
    data: [{
      picture: String
    }]
  }
  hots: object = {
    data: [{
      picture: String
    },
    {
      picture: String
    }, {
      picture: String
    }
    ]
  }

  openMovie: boolean = false
  openTelevision: boolean = false
  openAnimation: boolean = false
  type: String = "0"
  totalPages: any = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getListPage(1,10)
    this.getHot3ForAll()
  }
  provinceOut(event: any) {
    this.data = event
    this.totalPages = []
      for(let i = 1; i <= this.data.data.totalPages; i++) {
         this.totalPages.push(i);
       }
      
  }

  getListPage(page:Number,size:Number){
    this.homeService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
      for(let i = 1; i <= this.data.data.totalPages; i++) {
         this.totalPages.push(i);
       }
      })
  }

  getHotMovie() {
    this.openMovie = !this.openMovie
    if (this.openMovie) {
      this.homeService.getHotMovie().subscribe(data => this.hotMovies = data)
    } else {
      this.hotMovies = { data: [] }
    }

  }
  getHotTelevision() {
    this.openTelevision = !this.openTelevision
    if (this.openTelevision) {
      this.homeService.getHotTelevision().subscribe(data => this.hotTelevisions = data)
    } else {
      this.hotTelevisions = { data: [] }
    }
  }
  getHotAnimation() {
    this.openAnimation = !this.openAnimation
    if (this.openAnimation) {
      this.homeService.getHotAnimation().subscribe(data => this.hotAnimations = data)
    } else {
      this.hotAnimations = { data: [] }
    }
  }

  getHot3ForAll() {
    this.homeService.getHot3ForAll().subscribe(data => this.hots = data)
  }


}
