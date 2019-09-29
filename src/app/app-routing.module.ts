import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { OnlyLoggedOutUsersGuard, OnlyLoggedInUsersGuard } from './authenication.service';


const routes: Routes = [
  {path:"" , component:LoginComponent,canActivate: [OnlyLoggedOutUsersGuard]},

  {path:"dashboard" , component:DashboardComponent, canActivate: [OnlyLoggedInUsersGuard],
  children: [
    { path: "home", component: HomeComponent },
    { path: "enroll", component: EnrollComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
