import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})

export class MonComposantComponent {
  message: string = "Ceci est un exemple de composant Angular";
  nom: string = '';
  nombres: number[] = [];

  onBoutonClic(): void {
    console.log("Bouton cliqué !");
  }

  reinitialiserChamp(): void {
    this.nom = '';
  }
}
