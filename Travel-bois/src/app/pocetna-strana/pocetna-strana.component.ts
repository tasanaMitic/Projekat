import { Component, OnInit } from '@angular/core';
import { User } from '../entities/users/user/user';
import { RegisteredUser } from '../entities/users/registered-user/registered-user';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }
  getType(){
    return this.user.constructor.name;
  }
  
  testFunc(){
    console.debug(this.user.constructor.name === 'User');
  }
}
