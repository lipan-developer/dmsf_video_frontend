import { Component, OnInit, Output } from '@angular/core';
import { HomeService } from '../../services/home/home.service'
import { CommonService } from '../../services/common/common.service'
import { StorageService } from '../../services/storage/storage.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data: any = {
    data: {
      totalPages: String,
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
  constructor(private homeService: HomeService, private commonService: CommonService, private storageService: StorageService) { }

  ngOnInit() {
    this.getListPage(1, 12)
    this.getHot3ForAll()
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
    for (let i = 1; i <= this.data.data.totalPages; i++) {
      this.totalPages.push(i);
    }

  }

  getListPage(page: Number, size: Number) {
    this.homeService.listPage(page, size).subscribe(data => {
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
      for (let i = 1; i <= this.data.data.totalPages; i++) {
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

  addsupport(tableKey: String) {
    let nickName = this.storageService.getItem('nickName')
    if (!nickName) return;
    this.commonService.addsupport(tableKey).subscribe(
      data => {
        this.getListPage(1, 12)
      }
    )
  }
}
