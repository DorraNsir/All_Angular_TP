import {BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';
@NgModule({
declarations: [
AppComponent,
MenuComponent,
ContactComponent,
NotesComponent
],
imports: [
BrowserModule,
FormsModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
