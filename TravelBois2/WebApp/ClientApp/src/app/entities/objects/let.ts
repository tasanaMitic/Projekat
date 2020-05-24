import { Prtljag } from './prtljag';
import { Avion } from './avion';
import { Ocena } from '../misc/ocena';
import { TipPrtljaga } from 'src/app/_enums';
import { AvioKompanija } from './avio-kompanija';

export class Let {
    ID: number;
    avioKompanija: AvioKompanija;
    cenovnikPrtljaga: Map<TipPrtljaga, number>;
    datPolaska: Date;
    datDolaska: Date;
    DatumPolaska: string;
    DatumDolaska: string;
    mestoPolaska: string;
    mestoDolaska: string;
    presedanja: Array<string>;
    razdaljinaPutovanja: number;
    trajanjePutovalja: number; //u minutima
    avion: Avion;
    ocene: Array<Ocena>;

    constructor(id, avioKompanija: AvioKompanija, cenaRucnogPrtljaga, cenaMalogPrtljaga, cenaVelikogPrtljaga,
        datumPolaska: Date, datumDolaska: Date, mestoPolaska, mestoDolaska, avion, presedanja = []){
            //  Ne radi
            this.ID = id;
            this.avioKompanija = avioKompanija;
            this.cenovnikPrtljaga = new Map<TipPrtljaga, number>();
            this.cenovnikPrtljaga[TipPrtljaga.rucni] = cenaRucnogPrtljaga;
            this.cenovnikPrtljaga[TipPrtljaga.mali] = cenaMalogPrtljaga;
            this.cenovnikPrtljaga[TipPrtljaga.veliki] = cenaVelikogPrtljaga;
            this.datPolaska = datumPolaska;
            this.datDolaska = datumDolaska;
            this.DatumPolaska = datumPolaska.getDate() + '/' + datumPolaska.getMonth() + '/' + datumPolaska.getFullYear() + '\n' + datumPolaska.getHours() + ':' + datumPolaska.getMinutes();
            this.DatumDolaska = datumDolaska.getDate() + '/' + datumDolaska.getMonth() + '/' + datumDolaska.getFullYear() + '\n' + datumDolaska.getHours() + ':' + datumDolaska.getMinutes();
            this.mestoPolaska = mestoPolaska;
            this.mestoDolaska = mestoDolaska;
            //this.presedanja = presedanja === null ? new Array<string>() : presedanja;
            this.avion = avion;
            this.ocene = new Array<Ocena>();
            this.razdaljinaPutovanja = this.getRazdaljinaPutovanja();
            //this.trajanjePutovalja = this.getTrajanjePutovanja();
        }

    getRazdaljinaPutovanja(){
        return -1;
    }
    getTrajanjePutovanja(){
        //return Math.round(this.datDolaska.getTime() - this.datPolaska.getTime()) / 6000;
    }
    ProsecnaOcena(){
        let sum = 0;
        this.ocene.forEach(element => {
            sum += element.O;
        });
        return Math.round(sum / this.ocene.length);
    }
}
