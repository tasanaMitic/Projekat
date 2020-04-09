import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeregistrovanKorisnikComponent } from './neregistrovan-korisnik/neregistrovan-korisnik.component';

@NgModule({
  declarations: [
    AppComponent,
    NeregistrovanKorisnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
