import { Prtljag } from './prtljag';
import { Avion } from './avion';
import { Ocena } from '../misc/ocena';
import { TipPrtljaga } from 'src/app/_enums';
import { AvioKompanija } from './avio-kompanija';
import { Aerodrom } from './aerodrom';

enum TipLeta {
  oneWay = 0,
  multiCity = 1,
}

enum KlasaLeta {
  economic = 0,
  bussines = 1,
  first = 2,
}
export class Let {


    avioKompanija: AvioKompanija;
  //cenovnikPrtljaga: Map<TipPrtljaga, number>;
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
    avion: Avion;
    ocene: Array<Ocena>;
  cenaKarte: number;
  tipLeta: TipLeta;
  klasaLeta: KlasaLeta;

  constructor(mestoPolaska, mestoDolaska, datumPolaska, vremePoletanja, datumDolaska, vremeSletanja, trajanjePutovanja, razdaljinaPutovanja,klasa, tipLeta, presedanja = [], cena){
            //  Ne radi
            //this.avioKompanija = avioKompanija;
            //this.cenovnikPrtljaga = new Map<TipPrtljaga, number>();
            //this.cenovnikPrtljaga[TipPrtljaga.rucni] = cenaRucnogPrtljaga;
            //this.cenovnikPrtljaga[TipPrtljaga.mali] = cenaMalogPrtljaga;
            //this.cenovnikPrtljaga[TipPrtljaga.veliki] = cenaVelikogPrtljaga;
            this.datumPolaska = datumPolaska;
            this.datumDolaska = datumDolaska;
            this.mestoPolaska = mestoPolaska;
            this.mestoDolaska = mestoDolaska;
            this.vremePoletanja = vremePoletanja;
            this.vremeSletanja = vremeSletanja;
            if (presedanja.length == 0) {
              this.presedanja = null;
            }
            else {
              this.presedanja = presedanja;
            }
            this.trajanjePutovanja = trajanjePutovanja;
            this.razdaljinaPutovanja = razdaljinaPutovanja;
            if (tipLeta == 'oneWay') {
              this.tipLeta = TipLeta.oneWay
            }
            else {
              this.tipLeta = TipLeta.multiCity;
            }

    if (klasa == 'economic') {
      this.klasaLeta = KlasaLeta.economic;
    }
    else if (klasa == 'first') {
      this.klasaLeta = KlasaLeta.first;
    }
    else {
      this.klasaLeta = KlasaLeta.bussines;
    }
            this.cenaKarte = cena;
            //this.avion = avion;
            //this.ocene = new Array<Ocena>();
        }

    //getTrajanjePutovanja(){
    //    //return Math.round(this.datDolaska.getTime() - this.datPolaska.getTime()) / 6000;
    //}
    ProsecnaOcena(){
        let sum = 0;
        this.ocene.forEach(element => {
            sum += element.O;
        });
        return Math.round(sum / this.ocene.length);
    }
}
