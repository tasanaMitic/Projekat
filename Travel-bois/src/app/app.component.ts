import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './entities/users/user/user';
import { RegisteredUser } from './entities/users/registered-user/registered-user';
import { RentACarAdmin } from './entities/users/rent-a-car-admin/rent-a-car-admin';
import { AvioKompanijeComponent } from './avio-kompanije/avio-kompanije.component';
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
  avioKompanije: Array<AvioKompanija>;
  rente: Array<RentACar>;

  title = 'Travel-bois';

  ngOnInit() {
    //this.currentUser = new RentACarAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    //AppComponent.currentUser = new Admin();
    //AppComponent.currentUser = new RegisteredUser('062123456', 'Beograd', 'Tasana', 'Mitic', 'tasana', 'pass', 1234);
    AppComponent.currentUser = new User();
    //AppComponent.currentUser = new AvioAdmin('062123456', 'Beograd', 'Tasana', 'Mitic', 'tasana', 'pass');
  }
    
  getType(){
    return AppComponent.currentUser.constructor.name;
  }
}
