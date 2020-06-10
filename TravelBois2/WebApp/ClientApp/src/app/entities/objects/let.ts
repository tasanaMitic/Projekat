import { Prtljag } from './prtljag';
import { Ocena } from '../misc/ocena';
import { TipPrtljaga } from 'src/app/_enums';
import { AvioKompanija } from './avio-kompanija';
import { Aerodrom } from './aerodrom';
import { Sediste } from './sediste';

enum TipLeta {
  oneWay = 0,
  multiCity = 1,
}

enum KlasaLeta {
  first = 0,
  economy = 1,
  bussiness = 2,
}
export class Let {
  //cenovnikPrtljaga: Map<TipPrtljaga, number>
  id: number;
  datumPolaska: string;
  datumDolaska: string;
  vremePoletanja: string;
  vremeSletanja: string;
  mestoPolaska: string;
  mestoDolaska: string;
  presedanja: Array<Aerodrom>;
  razdaljinaPutovanja: number;
  trajanjePutovanja: number; //u minutima
  ocene: Array<Ocena>;
  cenaKarte: number;
  tipLeta: TipLeta;
  klasaLeta: KlasaLeta;
  aviokompanija: string;

  constructor(aviokompanija,mestoPolaska, mestoDolaska, datumPolaska, vremePoletanja, datumDolaska, vremeSletanja, trajanjePutovanja, razdaljinaPutovanja,klasa, tipLeta, presedanja = [], cena){
  this.aviokompanija = aviokompanija;
  this.datumPolaska = datumPolaska;
  this.datumDolaska = datumDolaska;
  this.mestoPolaska = mestoPolaska;
  this.mestoDolaska = mestoDolaska;
  this.vremePoletanja = vremePoletanja;
  this.vremeSletanja = vremeSletanja;
    if (presedanja == null) {
      this.presedanja = new Array<Aerodrom>();
    }
    else {
      this.presedanja = presedanja;
    }
  this.trajanjePutovanja = trajanjePutovanja;
  this.razdaljinaPutovanja = razdaljinaPutovanja;
    if (tipLeta == 0) {
      this.tipLeta = TipLeta.oneWay
    }
    else if (tipLeta == 1) {
      this.tipLeta = TipLeta.multiCity;
    }
    else if (tipLeta == 'oneWay') {
      this.tipLeta = TipLeta.oneWay;
    }
    else {
      this.tipLeta = TipLeta.multiCity
    }

    if (klasa == 1) {
      this.klasaLeta = KlasaLeta.economy;
    }
    else if (klasa == 0) {
      this.klasaLeta = KlasaLeta.first;
    }
    else if (klasa == 2) {
      this.klasaLeta = KlasaLeta.bussiness;
    }
    else if (klasa == 'first') {
      this.klasaLeta = KlasaLeta.first;
    }
    else if (klasa == 'economy') {
      this.klasaLeta = KlasaLeta.economy;
    }
    else {
      this.klasaLeta = KlasaLeta.bussiness;
    }

  this.cenaKarte = cena;
  this.ocene = new Array<Ocena>();
  }

    //getTrajanjePutovanja(){
    //    //return Math.round(this.datDolaska.getTime() - this.datPolaska.getTime()) / 6000;
    //}
    //ProsecnaOcena(){
    //    let sum = 0;
    //    this.ocene.forEach(element => {
    //        sum += element.O;
    //    });
    //    return Math.round(sum / this.ocene.length);
    //}
}
