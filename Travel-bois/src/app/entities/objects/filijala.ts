import { Kola } from './kola'
import { strict } from 'assert';
import { element } from 'protractor';
import { TipVozila } from 'src/app/_enums';
import { RentACar } from './rent-a-car';

export class Filijala {
    renta: string;
    Adresa: string;
    Grad: string;
    ListaKola: Array<Kola>;
    Rezervacije: Array<[Kola, Date, Date]>;
    Naziv: string;

    constructor(adr:string, naziv:string, grad: string, renta: string){
        this.Adresa = adr;
        this.Naziv = naziv;
        this.Grad = grad;
        this.renta = renta;
        this.ListaKola = new Array<Kola>();
        this.Rezervacije = new Array<[Kola, Date, Date]>();

        this.ListaKola.push(new Kola(5, 2006, 'Volks Wagen', 'Golf', TipVozila.Karavan, this.renta, 300));
        this.ListaKola.push(new Kola(5, 2007, 'Ford', 'Focus', TipVozila.Hecbek, this.renta, 300));
        this.ListaKola.push(new Kola(2, 2000, 'Mercedes', 'Smart', TipVozila.Hecbek, this.renta, 200));
        this.ListaKola.push(new Kola(5, 2007, 'Volks Wagen', 'Passat', TipVozila.Sedan, this.renta, 400));
    
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