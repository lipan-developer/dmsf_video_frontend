import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  data: any = {
    data:{
      totalPages:String,
      content: [{
        picture: String
      }]
    }
  }
  openHotMovie:boolean = false
  openNewMovie:boolean = false
  type:String = '1'
  newMovies:object = {
    data:[]
  }
  totalPages:any = []

  hotMovies:object = {
    data:[]
  }

  provinceOut(event: any) {
    this.data = event
    this.totalPages = []
    for(let i = 1; i <= this.data.data.totalPages; i++) {
       this.totalPages.push(i);
     }
  }
  ngOnInit() {
    this.getListPage(1,10)
  }

    getListPage(page:Number,size:Number){
    this.movieService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
       for(let i = 1; i <= this.data.data.totalPages; i++) {
         this.totalPages.push(i);
       }
      })
  }



  getNewMovie(){
    this.openNewMovie = !this.openNewMovie
    if(this.openNewMovie){
      this.movieService.getNewMovie().subscribe(data=>this.newMovies = data)
    }else{
      this.newMovies = { data:[] }
    }
  }


  getHotMovie(){
    this.openHotMovie = !this.openHotMovie
    if(this.openHotMovie){
      this.movieService.getHotMovie().subscribe(data=>this.hotMovies = data)
    }else{
      this.hotMovies = { data:[] }
    }
  }
}
