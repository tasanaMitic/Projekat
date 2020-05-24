import { Klase } from 'src/app/_enums';
import { Sediste } from './sediste';

export class Segment {
    cena: number;
    klasa: Klase;
    sedista: Array<Sediste>;

    constructor(c: number, k: Klase, brojSedista: number){
        this.cena = c;
        this.klasa = k;
        this.sedista = new Array<Sediste>();
        for(var i = 0; i < brojSedista; i+=1){
            this.sedista.push(new Sediste(i + 1));
        }
    }
}