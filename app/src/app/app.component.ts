import { Component, OnInit, Input } from '@angular/core';
import { ApiWizbiiService } from './api-wizbii.service';
import { Message,Commentaire, Auteur } from './dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input() message:Message[];

  constructor(private wizbiiService: ApiWizbiiService){
    //J'arrive pas à faire fonctionner l'api donc je fais des données de test
    //this.wizbiiService.getMessage();
    this.test();
  }
  
  ngOnInit(): void {}

  test(){
    let auteur1:Auteur = {
      nom:"Koutouan",
      prenom:"Serge",
      titreCV:"Auditeur, Controleur de gestion Junior"
    };
    let auteur2:Auteur = {
      nom:"Beli",
      prenom:"Léa",
      titreCV:"Ne s'affiche pas dans les commentaires"
    };
    let auteur3:Auteur = {
      nom:"Régnier",
      prenom:"Corentin",
      titreCV:"Recherche de stage en tant qu'assistant chef de projet web"
    };
    let commentaire1:Commentaire = {
      message:"Bienvenue Serge! Il est temps pour toi de retrouver tes amis pour profiter pleinement de Wizbii",
      date:"il y a 12 heures",
      auteur:auteur2
    };
    
    let message1:Message = {
      tag:["finance","contrôle de gestion", "audit"],
      message:"Salut ! \nJe suis Serge, de Msc INSEEC (LYON).\nJ'ai des connaissances en Finance, Contrôle de Gestion, Audit et Comptabilité.\Hate de partager des l'actu et des conseils avec vous. \nSi je peux vous aider n'hésitez pas à m'écrire.\nBye",
      date:"il y a 12 heures",
      auteur:auteur1,
      commentaire:[commentaire1],
      nbThanx:1
    };

    let message2:Message = {
      tag:["stage", "chef de projet", "digital", "communication visuelle"],
      message:"Bonjour à tous, \n Je suis à la recherche d'un stage de 6mois de février à juillet en tant que chef de projet spécialisé en communication visuelle. Je souhaiterai être à Nantes ou Grenoble.\n Mes compétences sont à la gestion de proje, à la communication visuelle, la communication digitale, le graphisme, la suite adobe (Photoshop, illustrator et indesign).",
      date:"il y a 12 heures",
      auteur:auteur3,
      commentaire:[],
      nbThanx:0
    };

    this.message = [message1,message2];

  }

  cliquer(){
    console.log("Vous avez cliqué mais rien ne peut etre modifer sur cette version")
  }
}
