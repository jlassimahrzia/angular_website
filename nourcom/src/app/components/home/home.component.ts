import { Component ,  OnInit , ViewEncapsulation } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer ,marker  } from 'leaflet';
import * as L from 'leaflet';
declare module 'leaflet' {
   namespace control {
       function fullscreen(v: any);
     }
}           
import 'node_modules/leaflet.fullscreen/Control.FullScreen.js';

import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown , fadeIn} from 'ng-animate';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig] ,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
  ],
})
export class HomeComponent implements OnInit  {

  fadeInDown = false;
fadeIn = false;
  constructor() {
   
  }

  ngOnInit() {
    AOS.init(
      {
        duration: 1500
      }
    );
  }

  options = {
    layers: [
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      }) , 
      L.marker([ 37.125190, 10.050123])
      .bindPopup('Bizerte Zouaoine')
      .openPopup()
    ],
    zoom: 10,
    center: L.latLng([ 37.125190, 10.050123 ]),
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'bottomleft'
    },

  };


}
