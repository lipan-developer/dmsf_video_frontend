import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AnimationComponent,
    TelevisionComponent,
    CommonComponent,
    DetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule
  ],
  providers: [HomeService
              ,AnimationService
              ,MovieService
              ,TelevisionService,
              DetailsService,
              CommonService,
              UserService,
              StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
