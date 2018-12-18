import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DetailsService } from '../../services/details/details.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css', '../../../../node_modules/videogular2/fonts/videogular.css']
})
export class DetailsComponent implements OnInit {

  id: any
  type: any
  data: any = {
    data: {
      picture: String,
      salves:[{url:String}]
    }
  };
  safeURL: SafeResourceUrl;
  auth:String
  nickName:String
  
  constructor(private router: ActivatedRoute,
    private detailsService: DetailsService,
    private sanitizer: DomSanitizer,
    private storageService:StorageService) {
    this.id = this.router.snapshot.paramMap.get('id');
    this.type = this.router.snapshot.paramMap.get('type');
    this.detailsService.getVideoDetails(this.id).subscribe(
      (data: any) => {
        this.data = data;
        this.safeURL = this.data.data.salves[0].url
      }) //http://xunleib.zuida360.com/1812/翻唱版本.HD1280高清中英双字版.mp4
  }

  ngOnInit() {
    this.auth = this.storageService.getItem('auth')
    this.nickName = this.storageService.getItem('nickName')
  }


  changeSafeURL(url:String){
    this.safeURL = url
  }

  removeStorage(){
    this.storageService.removeItem('auth')
    this.storageService.removeItem('nickName')
    this.auth = ''
    this.nickName = ''
  }
}