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

  ngOnInit() {
    this.movieService.listPage().subscribe(data=>(this.data = data))
  }

}
