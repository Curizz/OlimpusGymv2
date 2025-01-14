import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter, faPaypal, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faCreditCard, faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarroComponent } from './carro/carro.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CarroComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FontAwesomeModule,
    CarroComponent
  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook, faGoogle, faInstagram, faTwitter, faCircleUser, faCreditCard, faPaypal, faXTwitter,faCheckCircle 
    ); 
  }
}