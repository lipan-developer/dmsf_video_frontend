import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DetailsService } from '../../services/details/details.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
      picture: String
    }
  };
  safeURL: SafeResourceUrl;

  constructor(private router: ActivatedRoute,
    private detailsService: DetailsService,
    private sanitizer: DomSanitizer) {
    this.id = this.router.snapshot.paramMap.get('id');
    this.type = this.router.snapshot.paramMap.get('type');
    this.detailsService.getVideoDetails(this.id).subscribe(
      (data: any) => {
        this.data = data;
        this.safeURL = this.data.data.url
      }) //http://xunleib.zuida360.com/1812/翻唱版本.HD1280高清中英双字版.mp4
  }

  ngOnInit() {
  }

}
