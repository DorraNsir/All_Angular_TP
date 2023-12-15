export class Etudiant {
    public id: number;
    public nom: string;
    public prenom: string;
    public age:string;
    public email:string;
    constructor(id:number, nom:string, prenom:string,age:string,email: string) { 
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age=age;
    this.email=email;
    }
    }