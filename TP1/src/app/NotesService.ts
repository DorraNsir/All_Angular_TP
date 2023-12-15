import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class NotesService{
    notes:string[]=[]
    subNote:string[]=[]
    setNote(note:string){
        this.notes.push(note);
    }
    getNote():string[]{
        return this.notes.slice();
    }
    deleteNote(i:number){
        this.notes.splice(i,1);
      }
      setSubnote(subNote:string){
        this.subNote.push(subNote);
    }
    getSubnote():string[]{
        return this.subNote.slice();
    }
    deleteSubnote(i:number){
        this.subNote.splice(i,1);
      }
}