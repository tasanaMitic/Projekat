import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { AppComponent } from 'src/app/app.component';
import { AvioAdmin } from 'src/app/entities/users/avio-admin/avio-admin';
import { element } from 'protractor';
import { Avion } from 'src/app/entities/objects/avion';
import { Let } from 'src/app/entities/objects/let';
import { AvioKompanija } from 'src/app/entities/objects/avio-kompanija';

@Component({
  selector: 'app-lista-letova',
  templateUrl: './lista-letova.component.html',
  styleUrls: ['./lista-letova.component.css']
})
export class ListaLetovaComponent implements OnInit {
  letHeaders = ['Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Klasa', 'Cena', 'Prosecna ocena', ];
  letData : Array<Array<string>>;
  currentUser: AvioAdmin;
  public empty = 0;
  public aviokompanija= "";
  //
  Letovi = new Array<Let>();

  constructor(private location: Location) { 
    this.letData = new Array<Array<string>>();
    //
    this.Letovi.push(new Let(0, new AvioKompanija('aresa 1', 'Jat'), 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Bec', new Avion(10000, 20, 5000, 30, 1000, 50)));
    this.Letovi.push(new Let(1, new AvioKompanija('aresa 1', 'Jat'), 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Prag', new Avion(10000, 20, 5000, 30, 1000, 50)));
  }

  ngOnInit(): void {

    this.currentUser = AppComponent.currentUser as AvioAdmin;
    //this.currentUser.avioKompanija.letovi.forEach(element =>{
    this.Letovi.forEach(element =>{
      let temp = new Array<string>();
      this.empty = 1;
        temp.push(element.mestoPolaska)
        temp.push(element.mestoDolaska)
        temp.push(element.DatumPolaska)
        temp.push(element.DatumDolaska)
        temp.push('Business')
        temp.push('5000')
        temp.push(element.ProsecnaOcena().toString())
        this.letData.push(temp)
    });
  }

  onBack(){
    this.location.back();
  }

}
