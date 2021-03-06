import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { MovieComponent } from './components/movie/movie.component'
import { AnimationComponent } from './components/animation/animation.component'
import { TelevisionComponent } from './components/television/television.component'
import { DetailsComponent } from './components/details/details.component'
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ManageComponent } from './components/manage/manage.component'
import { ManagedetailsComponent } from './components/managedetails/managedetails.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'movie',component:MovieComponent},
  {path:'animation',component:AnimationComponent},
  {path:'television',component:TelevisionComponent},
  {path:'home/details/:type/:id',component:DetailsComponent},
  {path:'movie/details/:type/:id',component:DetailsComponent},
  {path:'television/details/:type/:id',component:DetailsComponent},
  {path:'animation/details/:type/:id',component:DetailsComponent},
  {path:'user/details/:tableKey',component:UserComponent},
  {path:'login/details',component:LoginComponent},
  {path:'user/edit',component:UserComponent},
  {path:'manage',component:ManageComponent},
  {path:'managedetails/:tableKey/:title',component:ManagedetailsComponent},
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
