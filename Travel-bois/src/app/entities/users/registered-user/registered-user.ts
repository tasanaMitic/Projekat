import { User } from '../user/user';
import { Kola } from 'src/app/entities/objects/kola';
import { Let } from 'src/app/entities/objects/let'

export class RegisteredUser extends User{
    BrojPasosa: number;
    IstorijaKola: Array<Kola>;
    IstorijaLetova: Array<Let>;
    MojaKola: Array<Kola>;
    MojiLetovi: Array<Let>;
    Prijatelji: Array<RegisteredUser>;

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