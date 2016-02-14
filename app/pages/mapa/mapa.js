import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/mapa/mapa.html'
})

export class MapaPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.map = null;
    this.loadMap();
  }
  goBack() {
    this.nav.pop();
  }


  loadMap(){
    let options = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
      (position) => {
       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      },
      (error) => {
        console.log(error);
      }, options
    );
  }


  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<p>Informação!</p>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(this.map, marker);
    });
  }
}
