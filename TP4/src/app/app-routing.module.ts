import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'liste', component: EtudiantListComponent },
  { path: 'add', component: EtudiantAddComponent },
  { path: 'edit/:id', component: EtudiantEditComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}