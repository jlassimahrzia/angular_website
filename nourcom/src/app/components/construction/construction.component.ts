import { Component, OnInit , ViewEncapsulation} from '@angular/core';


import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';
import * as AOS from 'aos';
@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
  ],
})
export class ConstructionComponent implements OnInit {

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
