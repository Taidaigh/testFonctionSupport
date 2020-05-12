export interface Message {
    tag:string[]
    message:string,
    date:string
    auteur:Auteur,
    commentaire:Commentaire[],
    nbThanx:number
}

export interface Commentaire{
    message:string,
    date:string,
    auteur:Auteur
}

export interface Auteur{
    nom:string,
    prenom:string,
    titreCV:string
}
