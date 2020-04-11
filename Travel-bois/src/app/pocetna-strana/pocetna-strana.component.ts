import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entities/users/user/user';
import { RegisteredUser } from '../entities/users/registered-user/registered-user';
import { RentACarAdmin } from '../entities/users/rent-a-car-admin/rent-a-car-admin'
import { Admin } from '../entities/users/admin/admin'

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    //this.user = new RentACarAdmin('060123456', 'Novi Sad', 'Pera', 'Zdera', 'prozdera', 'password');
    this.user = new Admin();
  }
  getType(){
    return this.user.constructor.name;
  }

  Kontakt(){
    ViewChild('app-kontakt');
    console.debug('kontakt called');
  }
  
  testFunc(){
    console.debug(this.user.constructor.name === 'User');
  }
}
