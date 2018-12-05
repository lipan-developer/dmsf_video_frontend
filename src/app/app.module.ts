import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AnimationComponent,
    TelevisionComponent,
    CommonComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService
              ,AnimationService
              ,MovieService
              ,TelevisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
