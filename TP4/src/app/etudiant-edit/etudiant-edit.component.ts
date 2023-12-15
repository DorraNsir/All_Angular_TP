import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../service/etudiant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: []
})
export class EtudiantEditComponent implements OnInit {
  etudiant: any = {};

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.etudiantService.getEtudiant(id).subscribe(data => {
      this.etudiant = data;
    });
  }

  updateEtudiant() {
    this.etudiantService
      .updateEtudiant(this.etudiant.id, this.etudiant)
      .subscribe(data => {
        this.etudiant = data;
    
        // Implement navigation or other logic after updating
      });
    }
}
