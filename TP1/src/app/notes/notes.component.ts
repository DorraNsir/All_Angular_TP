import { Component } from '@angular/core';
import { NotesService } from '../NotesService';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newNote:string="";
  notes:string[]=[];
  subNote:string[]=[];
  constructor(private NotesService:NotesService){};

  addNote(){
    // this.notes.push(this.newNote);
    this.NotesService.setNote(this.newNote);
  }
  List(){
    this.notes=this.NotesService.getNote();
    this.subNote=this.NotesService.getSubnote();
  }
  addSubnote(){
    // this.notes.push(this.newNote);
    this.NotesService.setSubnote(this.newNote);
  }
  
   
  getRandomInt(min: number,max:number){
    return(Math.floor(Math.random()*(max-min)))
  }


  generateColor(){
    let colors:string[]=["red","green","pink","black","yellow"];
    return colors[this.getRandomInt(0,colors.length-1)]
 
  }
  deleteNote(i:number){
    this.NotesService.deleteNote(i);
    this.notes.splice(i,1);
  }
}
