import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AgroalimentaireComponent } from './components/agroalimentaire/agroalimentaire.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { SanitaireComponent } from './components/sanitaire/sanitaire.component';

const routes: Routes = [
  { path:'' , component: HomeComponent } ,
  { path:'About' , component: AboutComponent } ,
  { path:'Contact' , component: ContactComponent } ,
  { path:'Produits' , component: ProduitComponent } ,
  { path:'Agroalimentaire' , component: AgroalimentaireComponent } ,
  { path:'Construction' , component: ConstructionComponent } ,
  { path:'Sanitaire' , component: SanitaireComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
