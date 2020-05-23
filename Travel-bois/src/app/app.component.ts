import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './entities/users/user/user';
import { RegisteredUser } from './entities/users/registered-user/registered-user';
import { RentACarAdmin } from './entities/users/rent-a-car-admin/rent-a-car-admin';
import { AvioKompanijeComponent } from './Komponente/Avio/avio-kompanije/avio-kompanije.component';
import { AvioKompanija } from './entities/objects/avio-kompanija';
import { RentACar } from './entities/objects/rent-a-car';
import { Admin } from './entities/users/admin/admin';
import { AvioAdmin } from './entities/users/avio-admin/avio-admin';

@Component({
  selector: 'app-root',
  template: '<app-pocetna-strana [user]="user"></app-pocetna-strana>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static currentUser: User;
  static datum: Date;
  //currentUser: User;
  static avioKompanije: Array<AvioKompanija>;
  static rente: Array<RentACar>;

  title = 'Travel-bois';

  ngOnInit() {
    AppComponent.avioKompanije = new Array<AvioKompanija>();
    AppComponent.rente = new Array<RentACar>();

    AppComponent.avioKompanije.push(new AvioKompanija('aresa 1', 'Jat'))
    AppComponent.rente.push(new RentACar('Car2Go', 'adresa 3'))

    AppComponent.currentUser = new User();
    //AppComponent.currentUser = new RegisteredUser('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password', 111546);
    //AppComponent.currentUser = new RentACarAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //AppComponent.currentUser = new Admin('sysAdmin', 'password');

    //AppComponent.currentUser = new Admin();
    //AppComponent.currentUser = new AvioAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //AppComponent.datum = new Date();
    
    //console.debug(AppComponent.currentUser)
  }
    
  getType(){
    return AppComponent.currentUser.constructor.name;
  }
}
