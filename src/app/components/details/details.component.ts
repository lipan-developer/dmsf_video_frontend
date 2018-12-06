import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import{ DetailsService } from '../../services/details/details.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css', '../../../../node_modules/videogular2/fonts/videogular.css']
})
export class DetailsComponent implements OnInit {

  id: any
  type: any
  data: any = {
    data: {}
  };
  constructor(private router: ActivatedRoute,private detailsService:DetailsService) { 
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.type = this.router.snapshot.paramMap.get('type');
    this.detailsService.getVideoDetails(this.id).subscribe(
      (data: any)=>{
      this.data = data;
    })
  }

}
