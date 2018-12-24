import { Component, OnInit ,ViewChild} from '@angular/core';
import { StorageService } from '../../services/storage/storage.service'
import { ActivatedRoute } from '@angular/router'
import { ManageService } from '../../services/manage/manage.service'


@Component({
  selector: 'app-managedetails',
  templateUrl: './managedetails.component.html',
  styleUrls: ['./managedetails.component.css']
})
export class ManagedetailsComponent implements OnInit {

  nickName:String;
  auth:String;

  title:String
  masterKey:String

  data:any = {
    data:{
      content:[{}]
    }
  }

  item:any = {
    tableKey:String,
    masterKey:String,
    url:String,
    remark:String,
    episodeNumber:String
  }
  @ViewChild("modal") modal:any

  constructor(private storageService:StorageService,private router: ActivatedRoute,
    private manageService:ManageService) { 
    this.nickName = this.storageService.getItem('nickName');
    this.auth = this.storageService.getItem('auth');
  }

  ngOnInit() {
    this.title = this.router.snapshot.paramMap.get('title');
    this.masterKey = this.router.snapshot.paramMap.get('tableKey');
    this.getListPage(1,10)
  }

  removeStorage(){
    this.storageService.removeItem('auth')
    this.storageService.removeItem('nickName')
    this.auth = ''
    this.nickName = ''
  }


  getListPage(page:Number,size:Number){
    this.manageService.getManageDetails(page,size,this.masterKey).subscribe(data => {
      this.data = data;
      console.info(this.data)
    })
  }

  openModal(item:Object){
    this.item = item;
    if(!this.item) {
      this.item = {
        tableKey:String,
        masterKey:String,
        url:String,
        remark:String,
        episodeNumber:String
      }
      this.item.tableKey= ''
      this.item.masterKey= this.masterKey
      this.item.remark= ''
      this.item.url= ''
      this.item.episodeNumber= ''
    }
    console.info(item)
    this.modal.open()
  }


  submitData(){
    this.item.masterKey = this.masterKey
    this.manageService.submitDetailsData(this.item).subscribe(data =>{
      this.modal.close();
      this.getListPage(1,10);}
    );
    
  }

  cancalSubmit(){
    this.item = {}
    this.modal.dismiss();
  }


  deleteData(item:any){
    this.item = item;
    this.manageService.deleteDetailsData(this.item.tableKey).subscribe(data =>{
      this.getListPage(1,10);}
    );
  }

}
