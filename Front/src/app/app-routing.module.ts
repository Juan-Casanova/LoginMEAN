import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { SigninComponent} from './components/signin/signin.component';
import { SignupComponent} from './components/signup/signup.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component:SigninComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
