import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsModalModule } from 'ng2-bs3-modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { AnimationComponent } from './components/animation/animation.component';
import { TelevisionComponent } from './components/television/television.component';
import { CommonComponent } from './components/common/common.component';

import { HomeService } from './services/home/home.service';
import { AnimationService } from './services/animation/animation.service';
import { MovieService } from './services/movie/movie.service';
import { TelevisionService } from './services/television/television.service';
import { DetailsComponent } from './components/details/details.component';
import { DetailsService } from './services/details/details.service'
import { CommonService } from './services/common/common.service'
import { StorageService } from './services/storage/storage.service'
import { UserService } from './services/user/user.service'
import { ManageService } from './services/manage/manage.service'

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ManageComponent } from './components/manage/manage.component';
import { ManagedetailsComponent } from './components/managedetails/managedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AnimationComponent,
    TelevisionComponent,
    CommonComponent,
    DetailsComponent,
    UserComponent,
    LoginComponent,
    ManageComponent,
    ManagedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    BsModalModule
  ],
  providers: [HomeService
              ,AnimationService
              ,MovieService
              ,TelevisionService,
              DetailsService,
              CommonService,
              UserService,
              StorageService,
              ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
