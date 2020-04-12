import { Prtljag } from './prtljag';
import { Avion } from './avion';
import { Ocena } from '../misc/ocena';
import { TipPrtljaga } from 'src/app/_enums';
import { IdHandler } from 'src/app/_id-handler';

export class Let {
    ID: number;
    cenovnikPrtljaga: Map<TipPrtljaga, number>;
    datPolaska: Date;
    datDolaska: Date;
    mestoPolaska: string;
    mestoDolaska: string;
    presedanja: Array<string>;
    razdaljinaPutovanja: number;
    trajanjePutovalja: number; //u minutima
    avion: Avion;
    ocene: Array<Ocena>;

    constructor(cenaRucnogPrtljaga, cenaMalogPrtljaga, cenaVelikogPrtljaga,
        datumPolaska, datumDolaska, mestoPolaska, mestoDolaska, avion, presedanja = []){
            //  Ne radi
            //this.ID = IdHandler.GenerateLetID();
            this.cenovnikPrtljaga = new Map<TipPrtljaga, number>();
            this.cenovnikPrtljaga[TipPrtljaga.rucni] = cenaRucnogPrtljaga;
            this.cenovnikPrtljaga[TipPrtljaga.mali] = cenaMalogPrtljaga;
            this.cenovnikPrtljaga[TipPrtljaga.veliki] = cenaVelikogPrtljaga;
            this.datPolaska = datumPolaska;
            this.datDolaska = datumDolaska;
            this.mestoPolaska = mestoPolaska;
            this.mestoDolaska = mestoDolaska;
            this.presedanja = presedanja === null ? new Array<string>() : presedanja;
            this.avion = avion;
            this.ocene = new Array<Ocena>();
            this.razdaljinaPutovanja = this.getRazdaljinaPutovanja();
            this.trajanjePutovalja = this.getTrajanjePutovanja();
        }

    getRazdaljinaPutovanja(){
        return -1;
    }
    getTrajanjePutovanja(){
        return Math.round(this.datDolaska.getTime() - this.datPolaska.getTime()) / 6000;
    }
}