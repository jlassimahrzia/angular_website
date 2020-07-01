import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'nourcom';
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr' , 'ar']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'fr');
  }

  ngOnInit() {

  }

  navbarOpen = false;
 
  toggleNavbar() {
    console.log('close');
    this.navbarOpen = !this.navbarOpen;
  }

  close(){
    console.log('close');
    this.navbarOpen = false;
  }

  changeEN(){
    this.translate.use('en');
    this.navbarOpen = false;
  }
  changeFR(){
    this.translate.use('fr');
    this.navbarOpen = false ;
  }
  changeAR(){
    this.translate.use('ar');
    this.navbarOpen = false;
  }
}
