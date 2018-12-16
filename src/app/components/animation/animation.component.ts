import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  data:any = {
    data:{
      totalPages:String,
      content: [{
        picture: String
      }]
    }
  }
  
  newAnimations:object = {
    data:[]
  }
  hotAnimations:object = {
    data:[]
  }
  openNewAnimation:boolean = false
  openHotAnimation:boolean = false
  type:String = '3'
  totalPages:any = []
  constructor(private animationService:AnimationService) { }

  ngOnInit() {
    this.getListPage(1,10)
  }

  getListPage(page:Number,size:Number){
    this.animationService.listPage(page,size).subscribe(data => {
      this.totalPages = []
      this.data = data;
       for(let i = 1; i <= this.data.data.totalPages; i++) {
         this.totalPages.push(i);
       }
      })
  }

  provinceOut(event: any) {
    this.data = event
    this.totalPages = []
    for(let i = 1; i <= this.data.data.totalPages; i++) {
       this.totalPages.push(i);
     }
  }
  getNewAnimation(){
    this.openNewAnimation = !this.openNewAnimation
    if(this.openNewAnimation){
      this.animationService.getNewAnimation().subscribe(data=>this.newAnimations = data)
    }else{
      this.newAnimations = { data:[] }
    }
  }
  getHotAnimation(){
    this.openHotAnimation = !this.openHotAnimation
    if(this.openHotAnimation){
      this.animationService.getHotAnimation().subscribe(data=>this.hotAnimations = data)
    }else{
      this.hotAnimations = { data:[] }
    }
  }


}
