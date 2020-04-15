import { Component, OnInit, Input } from '@angular/core';
import { Let } from '../entities/objects/let';
import {Location} from '@angular/common'
import { Avion } from '../entities/objects/avion';
import { AppComponent } from '../app.component';
import { element } from 'protractor';
import { AvioKompanija } from '../entities/objects/avio-kompanija';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {
  letHeaders = ['Avio kompanija', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Klasa', 'Cena', 'Prosecna ocena', ''];
  letData : Array<Array<string>>;
  @Input() aviokompanija: string;

  constructor(private location: Location) {
    this.letData = new Array<Array<string>>();

    ///AppComponent.avioKompanije.forEach(element => {
    ///  if (element.naziv == this.aviokompanija)
     // element.letovi.forEach(element => {
     //   let temp = new Array<string>();
     //   temp.push(element.avioKompanija.naziv);
      //  temp.push(element.mestoPolaska)
      //  temp.push(element.mestoDolaska)
     //   temp.push(element.DatumPolaska)
     //   temp.push(element.DatumDolaska)
     //   temp.push('Business')
     //   temp.push('5000')
     //   temp.push(element.ProsecnaOcena().toString())
     //   this.letData.push(temp)
     // });

    //});

    AppComponent.avioKompanije.forEach(element => {
      element.letovi.forEach(element => {
        let temp = new Array<string>();
        temp.push(element.avioKompanija.naziv);
        temp.push(element.mestoPolaska)
        temp.push(element.mestoDolaska)
        temp.push(element.DatumPolaska)
        temp.push(element.DatumDolaska)
        temp.push('Business')
        temp.push('5000')
        temp.push(element.ProsecnaOcena().toString())
       this.letData.push(temp)
      });
    });

   }

  ngOnInit(): void {
  }

  onBack(){
    this.location.back();
  }

  RezervisiLet(){}
  filterLet()  {}
  filterReset(){}

  


}
