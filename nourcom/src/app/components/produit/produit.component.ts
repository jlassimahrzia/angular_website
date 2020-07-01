import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';
import * as AOS from 'aos';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'] ,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
  ],
})
export class ProduitComponent implements OnInit {

  fadeInDown = false;

  constructor() { }

  ngOnInit() {
    AOS.init(
      {
        duration: 1500
      }
    );
  }

}
