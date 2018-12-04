import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { AnimationComponent } from './components/animation/animation.component';
import { TelevisionComponent } from './components/television/television.component';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    AnimationComponent,
    TelevisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
