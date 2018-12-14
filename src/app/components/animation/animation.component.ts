import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  data:any = []
  newAnimations:object = {
    data:[]
  }
  hotAnimations:object = {
    data:[]
  }
  openNewAnimation:boolean = false
  openHotAnimation:boolean = false
  type:String = '3'
  constructor(private animationService:AnimationService) { }

  ngOnInit() {
    this.animationService.listPage().subscribe(data => this.data = data)
  }

  provinceOut(event: any) {
    this.data = event
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
