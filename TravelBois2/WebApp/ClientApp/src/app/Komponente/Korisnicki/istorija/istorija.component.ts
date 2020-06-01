import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { User } from '../../../entities/users/user/user';
import { AppComponent } from '../../../app.component';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { TipVozila } from '../../../_enums';
import { Let } from '../../../entities/objects/let';
import { Aerodrom } from '../../../entities/objects/aerodrom';
import { element } from 'protractor';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {
  letHeaders = ['Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Prosecna ocena'];
  letHeadersRez = ['Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Tip leta', 'Klasa', 'Cena'];
  letData: Array<Array<string>>;
  letDataRez: Array<Array<string>>;
  emptyIL: number;
  emptyRL: number;
  kolaHeaders = ['Rent-A-Car', 'Marka', 'Model', 'Godiste', 'Broj mesta', 'Tip', 'Prosecna ocena'];
  kolaData: Array<Array<string>>;
  currentUser: RegisteredUser;
  relacija: string;


  IstorijaLetova: Array<Let>;


  constructor(private location: Location) { 
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.letData = new Array<Array<string>>();
    this.kolaData = new Array<Array<string>>();
    this.emptyIL = 0;
    this.emptyRL = 0;

    this.currentUser.IstorijaKola.forEach(element => {
      let temp = new Array<string>();
      temp.push(element.renta);
      temp.push(element.GetMarka())
      temp.push(element.GetModel())
      temp.push(element.Godiste.toString())
      temp.push(element.BrojMesta.toString())
      temp.push(TipVozila[element.Tip])
      temp.push(element.ProsecnaOcena().toString())
      this.kolaData.push(temp)
    });
  }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.ucitajIstorijuLetova();
    this.ucitajRezervisaneLetove();
    
  }

  ucitajRezervisaneLetove() {     //ucitati iz baze
    //this.emptyRL = 1;
  }

  ucitajIstorijuLetova() {      //ucitati iz baze
    this.IstorijaLetova = new Array<Let>();
    this.IstorijaLetova.push(new Let('Beograd', 'London', '05-12-2020', '15:00', '04-12-2020', '18:55', 250, 65, 'first', 'oneWay', new Array<Aerodrom>(), 650));
    this.IstorijaLetova.push(new Let('Budimpesta', 'Lisabon', '05-12-2020', '15:00', '04-12-2020', '18:55', 250, 65, 'first', 'oneWay', new Array<Aerodrom>(), 650));
    this.IstorijaLetova.push(new Let('Prag', 'Pariz', '05-12-2020', '15:00', '04-12-2020', '18:55', 250, 65, 'first', 'oneWay', new Array<Aerodrom>(), 650));
    this.emptyIL = 1;

    var i = 0;
    this.IstorijaLetova.forEach(element => {
      let temp = new Array<string>();

      //temp.push(element.id.toString())
      temp.push(i.toString());

      temp.push(element.mestoPolaska)
      temp.push(element.mestoDolaska)
      temp.push(element.datumPolaska)
      temp.push(element.datumDolaska)

      // temp.push(element.ProsecnaOcena().toString())
      temp.push('0');
      i += 1;

      this.letData.push(temp)
    });
  }

 

  OceniLet(id: string) {
    var number = parseInt(id);
    //this.IstorijaLetova.forEach(element => {        //ovako ce biti kad se letovi budu ucitavali iz baze
    //  if (element.id == number) {
    //    this.relacija = element.mestoPolaska + '-' + element.mestoDolaska;
    //  }
    //});

    this.letData.forEach(element => {
      if (parseInt(element[0]) == number) {
        this.relacija = element[1] + '-' + element[2];
      }
    });

    window.open('https://localhost:44343/oceniLet/' + number + '/' + this.relacija, "_self");
  }

  OtkaziLet(id: string) {
    var number = parseInt(id);

    //povezati se sa servisom
  }
  OceniKola() { }
  onBack() {
    this.location.back();
  }  
}
