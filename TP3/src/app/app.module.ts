import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AppRoutingModule } from './app-routing.module';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CateditComponent } from './catedit/catedit.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    CatDetailsComponent,
    CateditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
