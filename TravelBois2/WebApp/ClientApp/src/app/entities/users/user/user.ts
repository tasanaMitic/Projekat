import { RegisteredUser } from '../registered-user/registered-user';

export class User {
    registered: boolean = false;
    LoggedIn: boolean;
    BrojTelefona: string;
    Grad: string;
    Ime: string;
    Prezime: string;
    Username: string;
    Password: string;

    constructor(brTel: string='', grad: string='', ime: string='', 
        prezime: string='', username: string='', password: string=''){
            this.LoggedIn = false;
            this.BrojTelefona = brTel;
            this.Grad = grad;
            this.Ime = ime;
            this.Prezime = prezime;
            this.Username = username;
            this.Password = password;
        }
    
    register(){
        this.registered = true;
    }
}