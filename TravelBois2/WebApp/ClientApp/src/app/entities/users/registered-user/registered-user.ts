import { User } from '../user/user';
import { Kola } from 'src/app/entities/objects/kola';
import { Let } from 'src/app/entities/objects/let'
import { OnInit } from '@angular/core';
import { TipVozila } from 'src/app/_enums';
import { Aerodrom } from '../../objects/aerodrom';
import { AvioKompanija } from '../../objects/avio-kompanija';
import { RentACar } from '../../objects/rent-a-car';
import { AppComponent } from 'src/app/app.component';

export class RegisteredUser extends User implements OnInit{
    BrojPasosa: string;
    IstorijaKola: Array<Kola>;
    IstorijaLetova: Array<Let>;
    RezervacijaLetova: Array<Let>;
    MojaKola: Array<Kola>;
    Prijatelji: Array<RegisteredUser>;
    ZahteviZaPrijateljstvo: Array<RegisteredUser>;

    constructor(brTel: string, grad: string, ime: string, 
      prezime: string, username: string,
      brPasosa: string) {
            super(brTel, grad, ime, prezime, username);
            super.register();
            this.BrojPasosa = brPasosa;
            this.IstorijaKola = new Array<Kola>();
            this.MojaKola = new Array<Kola>();
            this.IstorijaLetova = new Array<Let>();
            this.RezervacijaLetova = new Array<Let>();
            this.Prijatelji = new Array<RegisteredUser>();
            this.ZahteviZaPrijateljstvo = new Array<RegisteredUser>();
            
            this.IstorijaKola.push(new Kola(5, 2000, 'Toyota', 'Yaris', TipVozila.Hecbek, 'Car2Go'));
            this.IstorijaKola.push(new Kola(5, 2000, 'Renault', 'Clio', TipVozila.Hecbek, 'Car2Go'));
        }
    ngOnInit(): void {
    }
    
}
