export class Sediste {
    broj: number;
    brPasosa: number;
    ime: string;
    prezime: string;
    zauzeto: boolean;
    brzaRezervacija: boolean;

    constructor(br:number, brzaRez:boolean=false){
        this.broj = br;
        this.brzaRezervacija = brzaRez;
        this.brPasosa = 0;
        this.ime = '';
        this.prezime = '';
        this.zauzeto = false;
    }
}