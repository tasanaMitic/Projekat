import { AvioKompanija } from '../../objects/avio-kompanija';
import { User } from '../user/user';

export class AvioAdmin extends User{
    promenioSifru:boolean;
    avioKompanija: AvioKompanija;

    constructor(brTel: string, grad: string, ime: string, prezime: string, username: string, password: string,)
    {
        super(brTel, grad, ime, prezime, username, password);
        super.register();
        this.promenioSifru = false;
        this.avioKompanija = null;
    }

    RegistrujAvio(AvioKompanija: AvioKompanija)
    {
        this.avioKompanija = AvioKompanija;
    }

    PromeniSifru(pass:string){
        this.promenioSifru = true;
        this.Password = pass;
    }

}