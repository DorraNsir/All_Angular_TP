import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <!-- Make sure to include ngModel in your component -->
<!-- In your component.ts file -->
<!-- import { NgModel } from '@angular/forms'; -->

<!-- In your @NgModule metadata -->
<!-- imports: [NgModel] -->

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Iset System</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="liste">Liste Etudiant</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="add">Add Etudiant</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `,
  styles: [
  ]
})
export class NavComponent {

}
