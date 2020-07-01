import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';
import * as AOS from 'aos';
@Component({
  selector: 'app-sanitaire',
  templateUrl: './sanitaire.component.html',
  styleUrls: ['./sanitaire.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
  ],
})
export class SanitaireComponent implements OnInit {

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
