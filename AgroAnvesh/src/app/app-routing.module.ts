import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { ManageSlotsComponent } from './manage-slots/manage-slots.component';
import { ViewRecordsComponent } from './view-records/view-records.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUPComponent},
  {path:"home",component:HomeComponent},
  {path:"doctor-signup",component:DoctorSignupComponent},
  {path:"manage-slots",component:ManageSlotsComponent},
  {path:"view-records",component:ViewRecordsComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
