import { Aerodromi } from './aerodromi';
import { Let } from './let';
import { Ocena } from '../misc/ocena';
import { strict } from 'assert';
import { Klase } from 'src/app/_enums';

export class AvioKompanija {
    adresa: string;
    naziv: string;
    opis: string;
    slikaUrl: string;
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
        this.opis = 'Opis aviokompanije';
        this.brzaRezervacijaPopust = 0;
        this.destinacije = new Array<string>();
        this.moguceDestinacije = new Aerodromi();
        this.ocene = new Array<Ocena>();
    }

    getType(){
        return AvioKompanija.name;
    }
    IzracunajProsecnuOcenu(){
        let n = 0;
        let sum = 0;
        this.ocene.forEach(element => {
            n += 1;
            sum += element.O;
        });
        return Math.round(sum / n);
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