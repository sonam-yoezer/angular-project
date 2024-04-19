import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { AppontmentComponent } from './Pages/appointment/appointment.component';
import { AboutComponent } from './Pages/about/about.component';
import { DoctorsComponent } from './Pages/doctors/doctors.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  { path:'department', component:DepartmentComponent},
  // { path:'appointment', component:AppontmentComponent},
  { path:'about', component:AboutComponent},
  { path:'doctors', component:DoctorsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
