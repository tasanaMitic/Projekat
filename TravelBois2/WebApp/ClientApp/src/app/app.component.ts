import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './entities/users/user/user';
import { RegisteredUser } from './entities/users/registered-user/registered-user';
import { RentACarAdmin } from './entities/users/rent-a-car-admin/rent-a-car-admin';
import { AvioKompanijeComponent } from './Komponente/Avio/avio-kompanije/avio-kompanije.component';
import { AvioKompanija } from './entities/objects/avio-kompanija';
import { RentACar } from './entities/objects/rent-a-car';
import { Admin } from './entities/users/admin/admin';
import { AvioAdmin } from './entities/users/avio-admin/avio-admin';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {OperatorFunction} from 'rxjs/internal/types';
import { UserService } from './shared/user.service';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  template: '<app-pocetna-strana [user]="user"></app-pocetna-strana>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = 'localhost:50356/applicationuser';
  //private apiUrl = 'localhost:4200';
  data: any = {};

  userDetails;
  static tipKorisnika: string;
  static reset = false;
  static currentUser;
  static datum: Date;
  //currentUser: User;
  static avioKompanije: Array<AvioKompanija>;
  static rente: Array<RentACar>;

  title = 'Travel-bois';

  constructor(private http: Http, private service: UserService){
    console.log('App started');
    this.getContacts();
    this.getData();
    //localStorage.clear();
    
  }
  getData(){
    return this.http.get(this.apiUrl).pipe(map((res) => res.json()));
  }
  getContacts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  ngOnInit() {


    AppComponent.avioKompanije = new Array<AvioKompanija>();
    AppComponent.rente = new Array<RentACar>();

    AppComponent.avioKompanije.push(new AvioKompanija('Jat', 'adresa1', 'Beograd'))
    AppComponent.rente.push(new RentACar('Car2Go', 'adresa 3'))

    //AppComponent.currentUser = new User();
    
    //AppComponent.currentUser = new RegisteredUser('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password', 111546);
    //AppComponent.currentUser = new RentACarAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //AppComponent.currentUser = new Admin('sysAdmin', 'password');

    //AppComponent.currentUser = new Admin();
    //AppComponent.currentUser = new AvioAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //AppComponent.datum = new Date();
    
    //console.debug(AppComponent.currentUser)
    
  } 

  provera() {
    this.service.getUserProfile().subscribe(
      res => {
        if (res != null) {
          this.userDetails = res;
          AppComponent.currentUser = new RegisteredUser('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password', 111546);
          AppComponent.tipKorisnika = "RegisteredUser";
        }
        else {
          AppComponent.currentUser = new User();
          AppComponent.tipKorisnika = "User";
        }
      },
      err => {

        console.log(err);
      },
    );
  }
  getType() {
    return AppComponent.tipKorisnika;
  }
}
