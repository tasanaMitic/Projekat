import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { User } from '../../../entities/users/user/user';
import { AppComponent } from '../../../app.component';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { TipVozila } from '../../../_enums';
import { Let } from '../../../entities/objects/let';
import { Aerodrom } from '../../../entities/objects/aerodrom';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { LetoviService } from '../../../shared/letovi.service';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {
  letHeadersIstorija = ['Aviokompanija','Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska'];
  letHeadersRezervacija = ['Aviokompanija','Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Vreme poletanja', 'Vreme sletanja', 'Klasa', 'Tip puta', 'Cena'];
  letData: Array<Array<string>>;
  letDataRez: Array<Array<string>>;
  emptyIL: number;
  emptyRL: number;
  kolaHeaders = ['Rent-A-Car', 'Marka', 'Model', 'Godiste', 'Broj mesta', 'Tip', 'Prosecna ocena'];
  kolaData: Array<Array<string>>;
  currentUser: RegisteredUser;
  relacija: string;


  avioRezervacije: Array<Let>;
  avioIstorija: Array<Let>;


  constructor(private router: Router, private service: LetoviService) { 
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.letData = new Array<Array<string>>();
    this.letDataRez = new Array<Array<string>>();
    this.kolaData = new Array<Array<string>>();
    this.emptyIL = 0;
    this.emptyRL = 0;

    this.avioIstorija = new Array<Let>();
    this.avioRezervacije = new Array<Let>();

    //UCITAVANJE LETOVA
    this.service.getLetovi().subscribe(letovi => {
      letovi.forEach(element => {
        var datum = element.datumPolaska.split("-");
        var danasnji = new Date().toString();
        var danasnjiDatum = danasnji.split(" ");
        var trenutnaGod = new Date().getFullYear();
        var trenutniMes = new Date().getMonth();
        var trenutniDan = danasnjiDatum[2];

        if (parseInt(datum[0]) >= trenutnaGod) {
          if (parseInt(datum[1]) >= (trenutniMes + 1)) {
            if (parseInt(datum[1]) == (trenutniMes + 1)) {  //bas trenutni mesec
              if (parseInt(datum[2]) >= parseInt(trenutniDan)) {
                ///jos resiti za vreme

                this.emptyRL = 1;


                this.avioRezervacije.push(new Let(element.aviokompanija, element.mestoPolaska, element.mestoDolaska, element.datumPolaska, element.vremePoletanja,
                  element.datumDolaska, element.vremeSletanja, element.trajanjePutovanja, element.razdaljinaPutovanja, element.klasaLeta, element.tipLeta, element.presedanja, element.cenaKarte));
              }
              else { //od juce pa nadalje
                this.emptyIL = 1;
                this.avioIstorija.push(new Let(element.aviokompanija, element.mestoPolaska, element.mestoDolaska, element.datumPolaska, element.vremePoletanja,
                  element.datumDolaska, element.vremeSletanja, element.trajanjePutovanja, element.razdaljinaPutovanja, element.klasaLeta, element.tipLeta, element.presedanja, element.cenaKarte));
              }
            }
            else {
              this.emptyRL = 1;
              this.avioRezervacije.push(new Let(element.aviokompanija, element.mestoPolaska, element.mestoDolaska, element.datumPolaska, element.vremePoletanja,
                element.datumDolaska, element.vremeSletanja, element.trajanjePutovanja, element.razdaljinaPutovanja, element.klasaLeta, element.tipLeta, element.presedanja, element.cenaKarte));
            }            
          }
          else {  //proslog meseca i nadalje
            this.emptyIL = 1;
            this.avioIstorija.push(new Let(element.aviokompanija, element.mestoPolaska, element.mestoDolaska, element.datumPolaska, element.vremePoletanja,
              element.datumDolaska, element.vremeSletanja, element.trajanjePutovanja, element.razdaljinaPutovanja, element.klasaLeta, element.tipLeta, element.presedanja, element.cenaKarte));
          }
        }
        else {  //prosle godine i nadalje
          this.emptyIL = 1;
          this.avioIstorija.push(new Let(element.aviokompanija, element.mestoPolaska, element.mestoDolaska, element.datumPolaska, element.vremePoletanja,
            element.datumDolaska, element.vremeSletanja, element.trajanjePutovanja, element.razdaljinaPutovanja, element.klasaLeta, element.tipLeta, element.presedanja, element.cenaKarte));
        }
      })
    });
    
  }

  ngOnInit(): void {
    
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

    this.router.navigateByUrl('/oceniLet/' + number + '/' + this.relacija);
  }

  OtkaziLet(i: number) {

    //povezati se sa servisom
  }
  OceniKola() { }
  onBack() {
    this.router.navigateByUrl('/pocetna');
  }  
}
