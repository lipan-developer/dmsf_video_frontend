import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  data:any = []
  openHotMovie:boolean = false
  openNewMovie:boolean = false
  newMovies:object = {
    data:[]
  }

  hotMovies:object = {
    data:[]
  }


  ngOnInit() {
    this.movieService.listPage().subscribe(data=>(this.data = data))
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
