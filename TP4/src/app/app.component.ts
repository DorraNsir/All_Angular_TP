
import { Component } from '@angular/core';
import { EtudiantService } from './service/etudiant.service';
import { Etudiant } from './model/etudiant';
@Component({
selector: 'app-root',
templateUrl: 'app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
employees!:any[];
constructor( empService:EtudiantService ) {
empService.getEtudiants().subscribe(response => this.employees = response )
}
}