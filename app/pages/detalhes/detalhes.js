import {Page, NavController} from 'ionic/ionic';
import {MapaPage} from "../mapa/mapa";


@Page({
  templateUrl: 'build/pages/detalhes/detalhes.html'
})

export class DetalhesPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.initializeItems();

  }


  initializeItems() {
    this.items = [
       {foto: "http://lorempixel.com/100/100/" , nome: "Guilherme", email: "guilherme@gmail.com"},
       {foto: "http://lorempixel.com/100/100/" , nome: "Diego", email: "diego@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Paulo", email: "paulo@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Leonardo", email: "leanardo@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Leandro", email: "leandro@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Leonardo Campos", email: "leocampos@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Leonardo Campos", email: "leocampos@gmail.com" },
       {foto: "http://lorempixel.com/100/100/" , nome: "Christian Oliveira", email: "christian@gmail.com" },
    ];
  }



  goTo(){
    this.nav.push(MapaPage);
  }

  goBack() {
    this.nav.pop();
  }
}
