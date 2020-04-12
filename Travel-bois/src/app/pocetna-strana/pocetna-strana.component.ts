import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../entities/users/user/user';
import { RegisteredUser } from '../entities/users/registered-user/registered-user';
import { RentACarAdmin } from '../entities/users/rent-a-car-admin/rent-a-car-admin'
import { Admin } from '../entities/users/admin/admin'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pocetna-strana',
  template: '{{user}}',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit {
  currentUser: User;
  constructor() { }

  ngOnInit(): void {
    //this.currentUser = new RegisteredUser('dfd','fsdfs','fsdfs','fsdfs','fsdfs','fdsdfs',123);
    this.currentUser = new User();
  }
  getType(){
    return this.currentUser.constructor.name;
  }
}
