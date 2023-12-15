import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, catchError } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

// export class EmployeeService {
// constructor(private http: HttpClient) { }
// public getEmployees(): Observable<Etudiant[]>
// {
// const url = 'http://localhost:3000/Etudaints';
// return this.http.get<Etudiant[ ]>(url);
// }
// }
export class EtudiantService {
  private apiUrl = 'http://localhost:3000/Etudaints';

  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getEtudiant(id:number): Observable<any[]> {
    return this.http.get<any[]>(`this.apiUrl/${id}`);
  }

  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post(this.apiUrl, etudiant);
  }

  updateEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, etudiant);
  }

  // deleteEtudiant(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
  deleteEtudiant(id: number): Observable<any> {
    console.log(`Deleting student with id ${id}`);
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error) => {
          console.error('Error during delete request:', error);
          throw error;
        })
      );
  }
}
