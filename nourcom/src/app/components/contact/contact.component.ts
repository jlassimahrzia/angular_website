import { Component, OnInit  , ViewEncapsulation } from '@angular/core';
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
import { fadeInDown } from 'ng-animate';


import { HttpClient  , HttpHeaders} from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';


import * as AOS from 'aos';
const httpOption = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST'
  })
};


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
  ],
})
export class ContactComponent implements OnInit {

  fadeInDown = false;

  formContact: FormGroup;

  send = false ;

 

  closeAlert() {
    this.send = false ;
  }
  constructor( private http: HttpClient ,  fb: FormBuilder,) {

    this.formContact = fb.group({
      email: [null, [Validators.required , Validators.email]],
      firstname: [null, [Validators.required]],
      lastname: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    }); 

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


  sendMail(){
    const data = {
      email: this.formContact.value.email,
      firstname: this.formContact.value.lastname,
      lastname: this.formContact.value.firstname,
      subject: this.formContact.value.subject,
      message: this.formContact.value.message,
    }

  /*  console.log(this.formContact.value.firstname , this.formContact.value.lastname ,
      this.formContact.value.email , this.formContact.value.subject , this.formContact.value.message); */

      this.http.post("http://localhost/PHPMail/script.php", data , httpOption).subscribe(
        (res:any)=>{
          this.send = true ;
        }
      );
      this.formContact.reset();
  }

}
