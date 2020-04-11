import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
