import { Filijala } from './filijala'
import { Ocena } from '../misc/ocena'
import { Kola } from './kola';

export class RentACar {
    Naziv: string;
    Opis: string;
    Filijale: Array<Filijala>;
    Ocene: Array<Ocena>;

    constructor(naz:string) {
        this.Naziv = naz;
        this.Opis = '';
        this.Filijale = new Array<Filijala>();
        this.Ocene = new Array<Ocena>();
//  Cisto da prikaze nesto
        this.Filijale.push(new Filijala('Bogdana Garabantina 3', 'Car2Go'));
    }
    getType(){
        return RentACar.name;
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

    OceniKompaniju(ocena: Ocena) {
        this.Ocene.push(ocena);
    }
    DodajFilijalu(f:Filijala){
        this.Filijale.push(f);
    }
    DodajKola(k:Kola, filijala:string){
        
    }
    PrikaziFilijale(){}
    PrikaziKola(){}
    RezervisiKola(ID:number, username:string, odKad:Date, doKad:Date){}
}