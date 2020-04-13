import { Component, OnInit } from '@angular/core';
import { RentACar } from '../entities/objects/rent-a-car';
import { User } from '../entities/users/user/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './sve-rente.component.html',
  styleUrls: ['./sve-rente.component.css']
})
export class SveRenteComponent implements OnInit {
  rente: Array<RentACar>;
  selectedRent: RentACar;
  currentUser: User;
  prikazRente: boolean;
  listaRenti: boolean;

  //ZA CSS
  klasa: string;
  tip: string = 'RentACar'

  constructor() { 
    this.rente = new Array<RentACar>();
    this.currentUser = AppComponent.currentUser;
    this.prikazRente = false;
    this.klasa = 'kompanija-slika';
  }
  ngOnInit(): void {
    this.rente.push(new RentACar('Car2Go'));
    //this.prikazRente = true;
    this.selectedRent = this.rente[0];
  }

  prikaziListu(){
    this.prikazRente = false;
  }

  prikaziRentu(naziv: string){
    this.rente.forEach(element => {
      if(element.Naziv === naziv){
        this.selectedRent = element;
      }
    });
    this.prikazRente = true;
  }

}
