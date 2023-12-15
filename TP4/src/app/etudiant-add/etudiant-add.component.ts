import { EtudiantService } from '../service/etudiant.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: []
})
export class EtudiantAddComponent implements OnInit {
  etudiant: { nom: string, prenom: string,email:string,age:string } = { nom: '', prenom: '',email:'',age:'' };
  constructor(private etudiantService: EtudiantService) {

  }

  ngOnInit() {}
  addEtudiant() {
    console.log(this.etudiant)
    this.etudiantService.addEtudiant(this.etudiant).subscribe(() => {
      // Implement navigation or other logic after adding
    });
  }
}
