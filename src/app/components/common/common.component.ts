import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common/common.service'
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Output() provinceOut = new EventEmitter();
  
  searchValue: String = ''

  data: any = {
    data:[]
  }
  searchResp:object = {
    data:[]
  }
  @Input() type:any
  @Input() run:any
  constructor(private commonService: CommonService) { }

  ngOnInit() {

  }

  getSeachResult() {
    this.commonService.getSeachResult(this.searchValue,this.type).subscribe(data => {
      this.data = data
      this.provinceOut.emit(this.data);
    })
  }
}
