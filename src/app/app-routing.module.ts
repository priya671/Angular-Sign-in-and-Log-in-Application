import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { Signup2Component } from './Components/signup2/signup2.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login/:email', component:LoginComponent},
  {path:'signup/:email', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'signup2', component:Signup2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
