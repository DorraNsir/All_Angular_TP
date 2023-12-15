import { NgModule } from '@angular/core';
import {Routes,RouterModule}from '@angular/router'
import { CarDetailsComponent } from './car-details/car-details.component';
import { AppComponent } from './app.component';
const routes:Routes=[
    {path:"",component:AppComponent},
    {path:"car/:id",component:CarDetailsComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}