import { Kola } from './kola'
import { strict } from 'assert';
import { element } from 'protractor';
import { TipVozila } from 'src/app/_enums';

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

        this.ListaKola.push(new Kola(5, 2006, 'Volks Wagen', 'Golf', TipVozila.karavan));
        this.ListaKola.push(new Kola(5, 2007, 'Ford', 'Focus', TipVozila.hecbek));
        this.ListaKola.push(new Kola(2, 2000, 'Mercedes', 'Smart', TipVozila.hecbek));
        this.ListaKola.push(new Kola(5, 2007, 'Volks Wagen', 'Passat', TipVozila.sedan));
    
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