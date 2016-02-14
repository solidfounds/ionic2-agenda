import {Page,NavController} from 'ionic/ionic';
import {DetalhesPage} from "../detalhes/detalhes";



@Page({
  templateUrl: 'build/pages/page1/page1.html'
})



export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav;
    this.searchQuery = '';
    this.initializeItems();
  }

  goTo(){
    this.nav.push(DetalhesPage);
  }

  // initializeItems() {
  //   this.items = [
  //     'Amsterdam',
  //     'Bogota',
  //   ];
  // }



  initializeItems() {
    this.items = [
      {foto: "http://lorempixel.com/100/100/" , nome: "Guilherme", idade: "20"},
      {foto: "http://lorempixel.com/100/100/" , nome: "Diego", idade: "23" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Paulo", idade: "30" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Leonardo", idade: "24" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Leandro", idade: "19" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Leonardo Campos", idade: "18" },
      {foto: "http://lorempixel.com/100/100/" , nome: "Christian Oliveira", idade: "23" },
    ];
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.nome.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > 1) {
        return true;
      }
      return false;
    })
  }


}
