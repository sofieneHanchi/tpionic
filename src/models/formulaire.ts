export class Etudiant {
    nom: string;
    prenom: string;
    matieres: string[];
    specialite: string;
    constructor(nom: string, prenom: string, matieres: string[], specialite: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.matieres = matieres;
        this.specialite = specialite;
    }
}