import { Kola } from './kola'
import { strict } from 'assert';
import { element } from 'protractor';

export class Filijala {
    Adresa: string;
    ListaKola: Array<Kola>;
    Rezervacije: Array<[Kola, Date, Date]>;
    Naziv: string;

    constructor(adr:string, naziv:string){
        this.Adresa = adr;
        this.Naziv = naziv;
        this.ListaKola = new Array<Kola>();
        this.Rezervacije = new Array<[Kola, Date, Date]>();
    }
    DodajKola(k:Kola){
        this.ListaKola.push(k);
    }
    IzbaciKola(id:number){
        this.ListaKola.forEach(element =>{
            if(element.ID === id){
                const index = this.ListaKola.indexOf(element);
                if (index > -1) {
                    this.ListaKola.splice(index, 1);
                }
                return true;
            }
        })
        return false;
    }
}