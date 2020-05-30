import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { AppComponent } from 'src/app/app.component';
import { AvioAdmin } from 'src/app/entities/users/avio-admin/avio-admin';
import { element } from 'protractor';
import { Avion } from 'src/app/entities/objects/avion';
import { Let } from 'src/app/entities/objects/let';
import { AvioKompanija } from 'src/app/entities/objects/avio-kompanija';
import { LetoviService } from '../../../shared/letovi.service';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-lista-letova',
  templateUrl: './lista-letova.component.html',
  styleUrls: ['./lista-letova.component.css']
})
export class ListaLetovaComponent implements OnInit {
  letHeaders = ['ID', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Klasa','Tip leta','Vreme poletanja', 'Vreme sletanja','Kilometraza', 'Cena' ];
  letData : Array<Array<string>>;
  currentUser: AvioAdmin;
  public empty = 0;
  public aviokompanija= "";
  //
  Letovi = new Array<Let>();

  constructor(private location: Location, private service: LetoviService) {
    this.letData = new Array<Array<string>>();    
  }

  ngOnInit(): void {
    this.getLetovi();
  }

  getLetovi(): void {
    this.service.getLetovi().subscribe(letovi =>
      letovi.forEach(element => {
        let temp = new Array<string>();
        this.empty = 1;
        temp.push(element.id.toString());
        temp.push(element.mestoPolaska);
        temp.push(element.mestoDolaska);
        temp.push(element.datumPolaska);
        temp.push(element.datumDolaska);
        if (element.klasaLeta.toString() == '0') {
          temp.push('economic');
        }
        else if (element.klasaLeta.toString() == '1') {
          temp.push('bussines');
        }
        else {
          temp.push('first');
        }

        if (element.tipLeta.toString() == '0') {
          temp.push('one-way');
        }
        else {
          temp.push('multi-city');
        }
        temp.push(element.vremePoletanja);
        temp.push(element.vremeSletanja);
        temp.push(element.razdaljinaPutovanja.toString());
        temp.push(element.cenaKarte.toString());
        //temp.push(element.ocene.toString());
        this.letData.push(temp);
      }));
  }

  ukloniLet(data: string) {
    var number = parseInt(data);
    this.service.deleteLet(number).subscribe();
    window.location.reload();
  }

  onBack(){
    window.open('https://localhost:44343/pocetna', "_self");
  }

}
