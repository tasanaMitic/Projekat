import { Component, OnInit, Input } from '@angular/core';
import { Let } from '../../../entities/objects/let';
import {Location} from '@angular/common'
import { Avion } from '../../../entities/objects/avion';
import { AppComponent } from '../../../app.component';
import { element } from 'protractor';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Aerodrom } from '../../../entities/objects/aerodrom';
import { Klase } from '../../../_enums';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {
  letHeaders = ['Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Vreme polaska', 'Vreme dolaska',  'Klasa', 'Tip puta', 'Cena'];
  letData: Array<Array<string>>; //lista letova
  letDataF: Array<Array<string>>; //lista filtriranih letova
  FilterForm: FormGroup;
  empty: number;
  destOd: string;
  destDo: string;
  datPolaska: string;
  datDolaska: string;
  k: string;
  klasa: string;
  tipPuta: string;
  t: string;
  public aviokompanija = "";
  filtriraniLetovi : Array<Let>;

  letovi: Array<Let>;

  constructor(private location: Location, private route: ActivatedRoute) {
    this.letData = new Array<Array<string>>();
    this.empty = 0;

    this.letovi = new Array<Let>();
   }

  ngOnInit() {
    this.aviokompanija = this.route.snapshot.paramMap.get("naziv");
    this.initForm();
    this.ucitajLetove();
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

    this.empty = 1;
  }

  onSubmit() {
    //this.filtriraniLetovi = Array<Let>();
    //this.letDataF = new Array<Array<string>>();
    this.destOd = this.FilterForm.get('destOd').value;
    this.destDo = this.FilterForm.get('destDo').value;
    this.k = this.FilterForm.get('klasa').value;
    if (this.k != "") {
      if (this.k == 'economic') {
        this.klasa = '0';
      }
      else if (this.k == 'business') {
        this.klasa = '1';
      }
      else {
        this.klasa = '2';
      }
    }
    else {
      this.klasa = '';
    }
    this.t = this.FilterForm.get('tipPuta').value;
    if (this.t != "") {
      if (this.t == 'one-way') {
        this.tipPuta = '0';
      }
      else {
        this.tipPuta = '1';
      }
    }
    else {
      this.tipPuta = '';
    }
    this.datPolaska = this.FilterForm.get('datPolaska').value;
    this.datDolaska = this.FilterForm.get('datDolaska').value;

   
    //console.log("filteri: " +this.destOd + ' ' + this.destDo + ' ' + this.klasa + ' ' + this.tipPuta + ' ' + this.datPolaska + ' ' + this.datDolaska);
    //////filtriranje

    if (this.destOd != "") {
      if (this.destDo != "") {
        if (this.klasa != "") {
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }
            }
            else { //nemam datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta);
              }
            }
          }
          else {  //nemam tip
            if (this.datPolaska != "") {  //nemam tip 
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska);
              }
            }
            else {  //nemam tip ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa);
              }
            }
          }
        }
        else { //nemam klasu
          if (this.tipPuta != "") { // nemam klasu al imamtip puta
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }

            }
            else { // nemam ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta);
              }
            }
          }
          else { //nemam klasu ni tip puta
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.datumPolaska == this.datPolaska);
              }
            }
            else {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.mestoDolaska == this.destDo);
              }
            }
          }
        }
      }
      else {  //nemam destinaciju dolaska
        if (this.klasa != "") {
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }
            }
            else {//nemam destinaciju dolaska, i nemam datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta);
              }
            }
          }
          else {  //nemam dest dolaska, nemam tip
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa &&  l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.klasaLeta.toString() == this.klasa  && l.datumPolaska == this.datPolaska );
              }
            }
            else {//nemam dest dolaska, tip ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd  && l.klasaLeta.toString() == this.klasa   && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd  && l.klasaLeta.toString() == this.klasa );
              }
            }
          }
        }
        else {//nemam des dolazaka ni klasu
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd  && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd &&  l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska );
              }
            }
            else { //nema des dolazka, ni klasu, ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd   && l.tipLeta.toString() == this.tipPuta  && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd   && l.tipLeta.toString() == this.tipPuta );
              }
            }
          }
          else { //nemam dest dolazaka, klasu ni tip
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd  && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd && l.datumPolaska == this.datPolaska );
              }
            }
            else {//nemam dest dolazaka, klasu, tip i datum polazaka
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd   && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoPolaska == this.destOd);
              }
            }
          }
        }
      }
    }
    else {  //nemam destinaciju polazaka
      if (this.destDo != "") {
        if (this.klasa != "") {
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }
            }
            else {//nemam dest polazaka ni datum polazata
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta);
              }
            }
          }
          else {  //nemam dest polazaka ni tip
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska);
              }
            }
            else {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.klasaLeta.toString() == this.klasa);
              }
            }
          }
        }
        else {//nemam dest polazaka ni klasu
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }
            }
            else { // nemam dest polazaka, klasu ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.tipLeta.toString() == this.tipPuta);
              }
            }
          }
          else {//nemam dest polazaka ni klasu ni tip
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.datumPolaska == this.datPolaska);
              }
            }
            else {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.mestoDolaska == this.destDo);
              }
            }
          }
        }
      }
      else {  //nemam dest polazaka ni dolazaka
        if (this.klasa != "") {
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska);
              }
            }
            else {//nemam dest polazaka ni dolazaka ni datum polaska
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l =>  l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa && l.tipLeta.toString() == this.tipPuta );}
            }
          }
          else {//nemam dest polazaka ni dolazaka ni puta
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa && l.datumPolaska == this.datPolaska);
              }
            }
            else {//nemam dest polazaka ni dolazaka ni puta ni datum polazaka
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l =>  l.klasaLeta.toString() == this.klasa  &&  l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.klasaLeta.toString() == this.klasa );
              }
            }
          }
        }
        else {//nemam dest polazaka ni dolazaka ni klasu
          if (this.tipPuta != "") {
            if (this.datPolaska != "") {
              if (this.datDolaska != "")
              {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l =>  l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.tipLeta.toString() == this.tipPuta && l.datumPolaska == this.datPolaska );
              }
            }
            else {//nemam dest polazaka ni dolazaka ni klasu ni datum polazaka
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l =>  l.tipLeta.toString() == this.tipPuta && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.tipLeta.toString() == this.tipPuta );
              }
            }
          }
          else {//nemam dest polazaka ni dolazaka ni klasu ni tip puta
            if (this.datPolaska != "") {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l =>  l.datumPolaska == this.datPolaska && l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.datumPolaska == this.datPolaska );
              }
            }
            else {
              if (this.datDolaska != "") {
                this.filtriraniLetovi = Array<Let>();
                this.filtriraniLetovi = this.letovi.filter(l => l.datumDolaska == this.datDolaska);
              }
              else {
                this.filtriraniLetovi = Array<Let>();
              }
            }
          }
        }
      }
    }

    if (this.filtriraniLetovi.length != 0) {
      this.empty = 2;
    }
    else {
      if (this.destDo == "" && this.destOd == "" && this.klasa == "" && this.tipPuta == "" && this.datDolaska == "" && this.datPolaska == "") {
        this.empty = 1;
      }
      else {
        this.empty = 3;
      }
      
    }

    if (this.empty == 2) {
      console.log('duzina liste filtriranih:' + this.filtriraniLetovi.length);
      this.filtriraniLetovi.forEach(element => {
        console.log("ispis:");
        console.log(element.mestoPolaska + ' ' + element.mestoDolaska);
      });


      this.letDataF = new Array<Array<string>>();
      this.filtriraniLetovi.forEach(element => {
        let temp = new Array<string>();
        temp.push(element.mestoPolaska);
        temp.push(element.mestoDolaska);
        temp.push(element.datumPolaska);
        temp.push(element.datumDolaska);
        temp.push(element.vremePoletanja);
        temp.push(element.vremeSletanja);
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
        temp.push(element.cenaKarte.toString());
        this.letDataF.push(temp);
      });
    }


    console.log('vrednost empty: '+this.empty);
  }

  KlasaChanged(e) {
    //this.k = this.FilterForm.get('klasa').value;
  }

  TipPutaChanged(e) {

    //this.t = this.FilterForm.get('tipPuta').value;
  }

  //////////
  ucitajLetove() {
    this.letovi.push(new Let('Beograd', 'London', '2020-06-06', '15:00', '2020-04-04', '18:55', 250, 65, 'economic', 'oneWay', new Array<Aerodrom>(), 650));
    this.letovi.push(new Let('Budimpesta', 'Lisabon', '2020-05-05', '15:00', '2020-04-04', '18:55', 250, 65, 'bussines', 'oneWay', new Array<Aerodrom>(), 650));
    this.letovi.push(new Let('Prag', 'Pariz', '2020-05-05', '15:00', '2020-04-04', '18:55', 250, 65, 'first', 'oneWay', new Array<Aerodrom>(), 650));
    this.letovi.push(new Let('Prag', 'Lisabon', '2020-05-05', '15:00', '2020-04-04', '18:55', 250, 65, 'bussines', 'oneWay', new Array<Aerodrom>(), 650));
    this.letovi.push(new Let('Beograd', 'Pariz', '2020-05-05', '15:00', '2020-04-04', '18:55', 250, 65, 'economic', 'oneWay', new Array<Aerodrom>(), 650));

    this.letovi.forEach(element => {
        let temp = new Array<string>();
        this.empty = 1;
      temp.push(element.mestoPolaska);
      temp.push(element.mestoDolaska);
      temp.push(element.datumPolaska);
      temp.push(element.datumDolaska);
      temp.push(element.vremePoletanja);
      temp.push(element.vremeSletanja);
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
      temp.push(element.cenaKarte.toString());
      this.letData.push(temp);
      

    });
  }

  RezervisiLet() { }

  onBack() {
    this.location.back();
  }

}
