import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  data:any = []

  constructor(private animationService:AnimationService) { }

  ngOnInit() {
    this.animationService.listPage().subscribe(data => this.data = data)
  }

}
