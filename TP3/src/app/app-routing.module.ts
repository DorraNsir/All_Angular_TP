import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CatsComponent} from "./cats/cats.component";
import {DogsComponent} from "./dogs/dogs.component";
import {CatDetailsComponent} from './cat-details/cat-details.component';
import { CateditComponent } from './catedit/catedit.component';
const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  {path: 'details/:id', component: CatDetailsComponent},
  {path: 'edit/:id', component: CateditComponent},

  ];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}