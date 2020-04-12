import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LoginComponent } from './login/login.component';
import { BrzeRezervacijeComponent } from './brze-rezervacije/brze-rezervacije.component';
import { AvioKompanijeComponent } from './avio-kompanije/avio-kompanije.component';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';
import { InfoComponent } from './info/info.component';
import { ProfilAdminaComponent } from './profil-admina/profil-admina.component';
import { RegAdminaRenteComponent } from './reg-admina-rente/reg-admina-rente.component';
import { RegAdminaAvioComponent } from './reg-admina-avio/reg-admina-avio.component';
import { RegAvioKompanijuComponent } from './reg-avio-kompaniju/reg-avio-kompaniju.component';
import { RegRentaKompanijuComponent } from './reg-renta-kompaniju/reg-renta-kompaniju.component';
import { DynamicImageComponent } from './dynamic-image/dynamic-image.component';
import { LetoviComponent } from './letovi/letovi.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranaComponent,
    KontaktComponent,
    NavBarComponent,
    RegistracijaComponent,
    LoginComponent,
    BrzeRezervacijeComponent,
    AvioKompanijeComponent,
    RentACarComponent,
    InfoComponent,
    ProfilAdminaComponent,
    RegAdminaRenteComponent,
    RegAdminaAvioComponent,
    RegAvioKompanijuComponent,
    RegRentaKompanijuComponent,
    DynamicImageComponent,
    LetoviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
