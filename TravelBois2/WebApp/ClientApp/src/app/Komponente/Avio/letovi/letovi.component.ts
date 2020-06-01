import { Component, OnInit, Input } from '@angular/core';
import { Let } from '../../../entities/objects/let';
import {Location} from '@angular/common'
import { Avion } from '../../../entities/objects/avion';
import { AppComponent } from '../../../app.component';
import { element } from 'protractor';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {
  letHeaders = ['Avio kompanija', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Klasa', 'Cena', 'Prosecna ocena', ''];
  letData: Array<Array<string>>; //lista letova
  FilterForm: FormGroup;
  public empty = 0;
  destOd: string;
  destDo: string;
  datPolaska: string;
  datDolaska: string;
  klasa: string;
  tipPuta: string;
  public aviokompanija= "";

  constructor(private location: Location, private route: ActivatedRoute) {
    this.letData = new Array<Array<string>>();
   }

  ngOnInit() {
    this.aviokompanija = this.route.snapshot.paramMap.get("naziv");
    this.initForm();

    //AppComponent.avioKompanije.forEach(element => {
    //  if (element.naziv == this.aviokompanija)
    //  element.letovi.forEach(element => {
    //    let temp = new Array<string>();
    //    this.empty = 1;
    //    temp.push(element.avioKompanija.naziv);
    //    temp.push(element.mestoPolaska)
    //    temp.push(element.mestoDolaska)
    //    temp.push(element.DatumPolaska)
    //    temp.push(element.DatumDolaska)
    //    temp.push('Business')
    //    temp.push('5000')
    //    temp.push(element.ProsecnaOcena().toString())
    //    this.letData.push(temp)
    //  });

    //});
  }

  initForm() {
    this.FilterForm = new FormGroup({
      'destOd' : new FormControl(''),
      'destDo': new FormControl(''),
      'datPolaska': new FormControl(''),
      'datDolaska': new FormControl(''),
      'klasa': new FormControl(''),
      'tipPuta': new FormControl('')
    });
  }

  filterReset() {
    this.FilterForm.controls['destOd'].setValue('');
    this.FilterForm.controls['destDo'].setValue('');
    this.FilterForm.controls['klasa'].setValue('');
    this.FilterForm.controls['tipPuta'].setValue('');
    this.FilterForm.controls['datPolaska'].setValue('');
    this.FilterForm.controls['datDolaska'].setValue('');
  }

  onSubmit() {
    this.destOd = this.FilterForm.get('destOd').value;
    this.destDo = this.FilterForm.get('destDo').value;
    this.klasa = this.FilterForm.get('klasa').value;
    this.tipPuta = this.FilterForm.get('tipPuta').value;
    this.datPolaska = this.FilterForm.get('datPolaska').value;
    this.datDolaska = this.FilterForm.get('datDolaska').value;
  }

  KlasaChanged(e) {
    this.klasa = this.FilterForm.get('klasa').value;}

  TipPuta(e) {

    this.tipPuta = this.FilterForm.get('tipPuta').value;
  }

  onBack(){
    this.location.back();
  }

  RezervisiLet(){}

}
