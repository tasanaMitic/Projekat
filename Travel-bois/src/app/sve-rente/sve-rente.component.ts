import { Component, OnInit } from '@angular/core';
import { RentACar } from '../entities/objects/rent-a-car';
import { User } from '../entities/users/user/user';
import { AppComponent } from '../app.component';
import { RentPrikaz, Meseci } from '../_enums';
import { Kola } from '../entities/objects/kola';
import { Datum } from '../entities/misc/datum';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './sve-rente.component.html',
  styleUrls: ['./sve-rente.component.css']
})
export class SveRenteComponent implements OnInit {
  rente: Array<RentACar>;
  sr: RentACar;
  sc: Kola;
  currentUser: User;
  prikaz: RentPrikaz;
  datum: Datum;
  danaUMesecu: number;

  //ZA CSS
  klasa: string = 'kompanija-slika';
  klasaKolaGrid: string = 'kola-ikonica';
  klasaKolaSlika: string = 'kola-slika';
  tip: string = 'RentACar/Kola'

  constructor() { 
    this.rente = new Array<RentACar>();
    this.currentUser = AppComponent.currentUser;
    this.prikaz = RentPrikaz.listaKompanija;
    this.datum = new Datum();
  }
  ngOnInit(): void {
    this.rente.push(new RentACar('Car2Go'));

     this.prikaz = RentPrikaz.kola;
     this.sr = this.rente[0];
     this.sc = this.rente[0].filtriranaKola[0];
  }
  GetCurrentUserType(){
    return this.currentUser.constructor.name;
  }
  IsCarAvalable(day, month, year){
    let date = new Date(year, month, day);
    let ret = true;
    this.sc.Zauzetost.forEach(element => {
      if(date >= element[0])
        if(date <= element[1])
          ret = false;
    });
    return ret;
  }
  test(val){
    console.debug(val)
  }

  prikaziListu(){
    this.prikaz = RentPrikaz.listaKompanija;
  }
  prikaziRentu(naziv: string = ''){
    if(naziv !== ''){
      this.rente.forEach(element => {
        if(element.Naziv === naziv){
          this.sr = element;
        }
      });
    }
    this.prikaz = RentPrikaz.kompanija;
  }
  prikaziKola(k: Kola){
    console.debug(k.Naziv);
    this.sc = k;
    this.prikaz = RentPrikaz.kola;
    this.datum = new Datum();
  }
}
