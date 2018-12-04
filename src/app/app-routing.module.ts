import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { MovieComponent } from './components/movie/movie.component'
import { AnimationComponent } from './components/animation/animation.component'
import { TelevisionComponent } from './components/television/television.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'movie',component:MovieComponent},
  {path:'animation',component:AnimationComponent},
  {path:'television',component:TelevisionComponent},
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
