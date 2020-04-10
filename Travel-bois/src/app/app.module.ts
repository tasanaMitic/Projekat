import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeregistrovanKorisnikComponent } from './neregistrovan-korisnik/neregistrovan-korisnik.component';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';

@NgModule({
  declarations: [
    AppComponent,
    NeregistrovanKorisnikComponent,
    PocetnaStranaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
