import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './entities/users/user/user';
import { RegisteredUser } from './entities/users/registered-user/registered-user';
import { RentACarAdmin } from './entities/users/rent-a-car-admin/rent-a-car-admin';
import { AvioKompanijeComponent } from './avio-kompanije/avio-kompanije.component';
import { AvioKompanija } from './entities/objects/avio-kompanija';
import { RentACar } from './entities/objects/rent-a-car';
import { Admin } from './entities/users/admin/admin';

@Component({
  selector: 'app-root',
  template: '<app-pocetna-strana [user]="user"></app-pocetna-strana>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static currentUser: User;
  //currentUser: User;
  avioKompanije: Array<AvioKompanija>;
  rente: Array<RentACar>;

  title = 'Travel-bois';

  ngOnInit() {
    //this.currentUser = new RentACarAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //this.currentUser = new Admin();
    //AppComponent.currentUser = new Admin();
    AppComponent.currentUser = new User();
  }
    
  getType(){
    return AppComponent.currentUser.constructor.name;
  }
}
