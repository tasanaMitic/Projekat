import {User} from 'src/app/entities/user/user'

export class RegisteredUser extends User{
    LoggedIn: boolean;
    BrojTelefona: string;
    Grad: string;
    Ime: string;
    Prezime: string;
    Username: string;
    Password: string;

    constructor(brTel: string, grad: string, ime: string, 
        prezime: string, username: string, password: string){
            super();
            super.register();
            this.LoggedIn = false;
            this.BrojTelefona = brTel;
            this.Grad = grad;
            this.Ime = ime;
            this.Prezime = prezime;
            this.Username = username;
            this.Password = password;
        }
    
    checkCredentials(password: string){
        if (password === this.Password)
            return true;
        else
            return false;
    }
}