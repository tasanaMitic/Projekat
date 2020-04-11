import { Aerodromi } from './aerodromi';
import { Let } from './let';
import { Ocena } from '../misc/ocena';
import { strict } from 'assert';
import { Klase } from 'src/app/_enums';

export class AvioKompanija {
    adresa: string;
    naziv: string;
    opis: string;
    brzaRezervacijaPopust: number; //u procentima
    destinacije: Array<string>;
    letovi: Array<Let>;
    ocene: Array<Ocena>
    rezervacije: Array<Let>;

    //Dok ne skontamo kako se salju podaci
    moguceDestinacije: Aerodromi;

    constructor(adresa, naziv){
        this.adresa = adresa;
        this.naziv = naziv;
        this.brzaRezervacijaPopust = 0;
        this.destinacije = new Array<string>();
        this.moguceDestinacije = new Aerodromi();
    }

    DodajDestinaciju(dest:string){
        this.moguceDestinacije.lokacije.forEach(element => {
            if(element === dest) {
                this.destinacije.push(element);
                return true;
            }
        });
        return false;
    }

    IzracunajPopustBrzeRezervacije(letID:number, klasa: Klase) {
        var cena;
        this.letovi.forEach(element => {
            if (element.ID === letID){
                return element.avion.segmenti[klasa].cena * (100 - this.brzaRezervacijaPopust);
            }
        });
    }
    IzracunajPopustBonusPoena(){}
}