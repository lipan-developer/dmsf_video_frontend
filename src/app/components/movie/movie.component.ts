import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
import { CommonService } from '../../services/common/common.service'
import { StorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService,private commonService : CommonService,private storageService :StorageService) { }
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
    if (this.data.data.totalPages > 7) {
      // 首页显示 1，2，3，4，5，6，7，...
      if (this.data.data.pageable.pageNumber + 1 <= 7) {
        for (let i = 1; i <= 7; i++) {
          this.totalPages.push(i);
        }
        this.totalPages.push(8)
        this.totalPages.push('...')
      }
      if(this.data.data.pageable.pageNumber + 1 >= 8 && this.data.data.pageable.pageNumber + 1 <= this.data.data.totalPages -7){
        this.totalPages.push('...')
        for (let i = (Number)(this.data.data.pageable.pageNumber + 1)-3; i <= (Number)(this.data.data.pageable.pageNumber + 1)+ 3; i++) {
          this.totalPages.push(i);
        }
        this.totalPages.push('...')
      }
      if(this.data.data.pageable.pageNumber + 1 > this.data.data.totalPages -7){
        this.totalPages.push('...')
        for (let i = this.data.data.totalPages -7; i <= this.data.data.totalPages; i++) {
          this.totalPages.push(i);
        }
      }
      return
    }
    for(let i = 1; i <= this.data.data.totalPages; i++) {
       this.totalPages.push(i);
     }
  }
  ngOnInit() {
    this.getListPage(1,12)
  }

    getListPage(page:Number,size:Number){
    this.movieService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
      if (this.data.data.totalPages > 7) {
        // 首页显示 1，2，3，4，5，6，7，...
        if (page <= 7) {
          for (let i = 1; i <= 7; i++) {
            this.totalPages.push(i);
          }
          this.totalPages.push(8);
          this.totalPages.push('...')
        }
        if(page >= 8 && page <= this.data.data.totalPages -7){
          this.totalPages.push('...')
          for (let i = (Number)(page)-3; i <= (Number)(page)+ 3; i++) {
            this.totalPages.push(i);
          }
          this.totalPages.push('...')
        }
        if(page > this.data.data.totalPages -7){
          this.totalPages.push('...')
          for (let i = this.data.totalPages -7; i <= this.data.data.totalPages; i++) {
            this.totalPages.push(i);
          }
        }
        return
      }
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

  addsupport(tableKey:String){
    let nickName = this.storageService.getItem('nickName')
    if(!nickName) return ;
    this.commonService.addsupport(tableKey).subscribe(
      data=>{
        this.getListPage(1,12)
      }
    )
  }
}
