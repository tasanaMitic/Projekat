import { Aerodrom } from './aerodrom';
import { Let } from './let';
import { Ocena } from '../misc/ocena';

export class AvioKompanija {
  adresa: string;
  grad: string;
    naziv: string;
    opis: string;
    slikaUrl: string;
  OceneAviokompanije: Array<Ocena>

    constructor(naziv, adresa, grad, opis){
        this.adresa = adresa;
        this.naziv = naziv;
        this.grad = grad;
        this.opis = opis;
        //this.brzaRezervacijaPopust = 0;
        this.OceneAviokompanije = new Array<Ocena>();

    }

    getType(){
        return AvioKompanija.name;
    }


    //ProsecnaOcena(){
    //    let count = 0;
    //    let sum = 0;
    //    this.Ocene.forEach(element => {
    //        sum += element.O;
    //        count += 1;
    //    });
    //    return sum / count;
    //}

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
