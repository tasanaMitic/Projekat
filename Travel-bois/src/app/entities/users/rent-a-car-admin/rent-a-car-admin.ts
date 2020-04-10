import { User } from "../user/user"
import { RentACar } from 'src/app/entities/objects/rent-a-car'
import { Filijala } from '../../objects/filijala';

export class RentACarAdmin extends User {
    PromenioSifru:boolean;
    Renta: RentACar;

    constructor(brTel: string, grad: string, ime: string, 
        prezime: string, username: string, password: string,){
            super(brTel, grad, ime, prezime, username, password);
            super.register();
            this.PromenioSifru = false;
            this.Renta = null;
        }
    
    RegistrujRentu(renta: RentACar){
        this.Renta = renta;
    }
    PromeniSifru(pass:string){
        this.PromenioSifru = true;
        this.Password = pass;
    }
    DodajFilijalu(f:Filijala){
        this.Renta.DodajFilijalu(f);
    }
}