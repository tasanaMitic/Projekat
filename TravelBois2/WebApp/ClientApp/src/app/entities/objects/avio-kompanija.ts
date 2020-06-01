import { Aerodrom } from './aerodrom';
import { Let } from './let';
import { Ocena } from '../misc/ocena';
import { Klase } from 'src/app/_enums';
import { Avion } from './avion';

export class AvioKompanija {
  adresa: string;
  grad: string;
    naziv: string;
    opis: string;
    slikaUrl: string;
    brzaRezervacijaPopust: number; //u procentima
    destinacije: Array<string>;
    letovi: Array<Let>;
    Ocene: Array<Ocena>
    rezervacije: Array<Let>;
    aerodromi: Array<Aerodrom>;

    //Dok ne skontamo kako se salju podaci
    moguceDestinacije: Aerodrom;

    constructor(naziv, adresa, grad){
        this.adresa = adresa;
        this.naziv = naziv;
        this.grad = grad;
        this.opis = 'Opis aviokompanije';
        this.brzaRezervacijaPopust = 0;
        this.letovi = new Array<Let>();
        this.destinacije = new Array<string>();
        this.Ocene = new Array<Ocena>();

        //this.letovi.push(new Let(1, this, 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Bec', new Avion(10000, 20, 5000, 30, 1000, 50)))
    }

    getType(){
        return AvioKompanija.name;
    }

    OceniKompaniju(ocena: Ocena) {
        this.Ocene.push(ocena);
    }

    ProsecnaOcena(){
        let count = 0;
        let sum = 0;
        this.Ocene.forEach(element => {
            sum += element.O;
            count += 1;
        });
        return sum / count;
    }

    //DodajDestinaciju(dest:string){
    //    this.moguceDestinacije.lokacije.forEach(element => {
    //        if(element === dest) {
    //            this.destinacije.push(element);
    //            return true;
    //        }
    //    });
    //    return false;
    //}

    //IzracunajPopustBrzeRezervacije(letID:number, klasa: Klase) {
    //    var cena;
    //    this.letovi.forEach(element => {
    //        if (element.ID === letID){
    //            return element.avion.segmenti[klasa].cena * (100 - this.brzaRezervacijaPopust);
    //        }
    //    });
    //}
    IzracunajPopustBonusPoena(){}
}
