import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
declarations: [
AppComponent,
EtudiantListComponent,
EtudiantAddComponent,
EtudiantEditComponent,
NavComponent,

],
imports: [
BrowserModule,
HttpClientModule,
AppRoutingModule,
FormsModule,

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
// @NgModule({
//   declarations: [
//     // ... (other components)
//     EtudiantListComponent,
//     EtudiantAddComponent,
//     EtudiantEditComponent
//   ],
//   imports: [
//     // ... (other modules)
//     HttpClientModule,
//     FormsModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [EtudiantService],
//   bootstrap: [AppComponent]
// })
