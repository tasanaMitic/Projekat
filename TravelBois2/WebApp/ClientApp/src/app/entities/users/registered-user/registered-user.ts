import { User } from '../user/user';
import { Kola } from 'src/app/entities/objects/kola';
import { Let } from 'src/app/entities/objects/let'
import { OnInit } from '@angular/core';
import { TipVozila } from 'src/app/_enums';
import { Aerodrom } from '../../objects/aerodrom';
import { Avion } from '../../objects/avion';
import { AvioKompanija } from '../../objects/avio-kompanija';
import { RentACar } from '../../objects/rent-a-car';
import { AppComponent } from 'src/app/app.component';

export class RegisteredUser extends User implements OnInit{
    BrojPasosa: number;
    IstorijaKola: Array<Kola>;
    IstorijaLetova: Array<Let>;
    MojaKola: Array<Kola>;
    MojiLetovi: Array<Let>;
    Prijatelji: Array<RegisteredUser>;
    Zahtevi: Array<RegisteredUser>;

    constructor(brTel: string, grad: string, ime: string, 
        prezime: string, username: string, password: string,
        brPasosa:number){
            super(brTel, grad, ime, prezime, username, password);
            super.register();
            this.BrojPasosa = brPasosa;
            this.IstorijaKola = new Array<Kola>();
            this.MojaKola = new Array<Kola>();
            this.IstorijaLetova = new Array<Let>();
            this.MojiLetovi = new Array<Let>();
            
            this.IstorijaKola.push(new Kola(5, 2000, 'Toyota', 'Yaris', TipVozila.Hecbek, 'Car2Go'));
            this.IstorijaKola.push(new Kola(5, 2000, 'Renault', 'Clio', TipVozila.Hecbek, 'Car2Go'));
            //this.IstorijaLetova.push(new Let(2, new AvioKompanija('Bogdana suputa 9', 'Jat'), 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Bec', new Avion(10000, 20, 5000, 30, 1000, 50)));
        }
    ngOnInit(): void {
    }
    
    checkCredentials(password: string){
        if (password === this.Password)
            return true;
        else
            return false;
    }

    ArurirajPodatke(){}
    DodajPrijatelja(username:string){}
    ObrisiPrijatelja(username:string){}
    PrihvatiZahtev(){}
    OdbijZahtev(){}
    PozoviPrijatelja(username:string){}
    PrikaziIstorijuLetova(){}
    PrikaziIstorijuKola(){}
    PrikaziPrijatelje(){}
    Profil(){}
    ProveriZavrsenost(){}
    RezervisiKola(odKad:Date, doKad:Date){}
    RezervisiMesto(odKad:Date, doKad:Date){}
}
