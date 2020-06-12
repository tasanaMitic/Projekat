import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LetoviService } from '../../../shared/letovi.service';
import { element } from 'protractor';
import { Pozivnica } from '../../../entities/objects/pozivnica';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { AppComponent } from '../../../app.component';
import { Let } from '../../../entities/objects/let';

@Component({
  selector: 'app-pozivnice',
  templateUrl: './pozivnice.component.html',
  styleUrls: ['./pozivnice.component.css']
})
export class PozivniceComponent implements OnInit {
  empty: number;
  currentUser: RegisteredUser;
  letHeaders = ['Aviokompanija', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Vreme poletanja','Vreme sletanja', 'Cena', 'Poslao pozivnicu'];
  letData: Array<Array<string>>;
  pozivnice: Array<Pozivnica>;
  idLetova: Array<{ idLeta: number, pozvaoUsername: string }>;

  constructor(private router: Router, private service: LetoviService) {
    this.currentUser = AppComponent.currentUser;
    this.letData = new Array<Array<string>>();
    this.empty = 0;

    
  }

  ngOnInit(): void {
    this.idLetova = new Array<{ idLeta: number, pozvaoUsername: string }>();
    this.pozivnice = new Array<Pozivnica>();

    this.service.getPozivnice().subscribe(pozivnice => {
      pozivnice.forEach(element => {
        if (element.brojPasosa == this.currentUser.BrojPasosa) {
          this.pozivnice.push(new Pozivnica(element.idLeta, element.idSedista, element.ime, element.prezime, element.brojPasosa, element.rezervisano, element.cenaSedista, element.pozvaoUsername));
          this.idLetova.push({ idLeta: element.idLeta, pozvaoUsername: element.pozvaoUsername });
        }
      })
    });
  }

  prikaziPozivnice() {
    this.service.getLetovi().subscribe(letovi => {
      letovi.forEach(element => {
        this.idLetova.forEach(par => {
          if (par.idLeta == element.id) {
            this.empty = 1;
            let temp = new Array<string>();
            temp.push(element.aviokompanija);
            temp.push(element.mestoPolaska);
            temp.push(element.mestoDolaska);
            temp.push(element.datumPolaska);
            temp.push(element.datumDolaska);
            temp.push(element.vremePoletanja);
            temp.push(element.vremeSletanja);
            temp.push(element.cenaKarte.toString());
            temp.push(par.pozvaoUsername);
            temp.push(element.id.toString())
            this.letData.push(temp);
          }
        })
      })
    });
  }

  PrihvatiPozivnicu(data: any) {
    console.log(data);
  }

  OdbijPozivnicu(data: any) {
    console.log(data);
  }

  onBack() {
    this.router.navigateByUrl('/pocetna');
  }
}
