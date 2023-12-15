import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'notes',
    component:NotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
