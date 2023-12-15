
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: []
})
export class EtudiantListComponent implements OnInit {
  etudiants!: any[];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  editEtudiant(id: number) {

    
    // Implement navigation or other logic for editing
  }
  private fetchStudents() {
    this.etudiantService.getEtudiants().subscribe((data) => {
      this.etudiants= data;
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.etudiantService.deleteEtudiant(id).subscribe(
        () => {
          console.log('Student deleted successfully');
          this.fetchStudents(); // Refresh the student list after deletion
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }
  
}
