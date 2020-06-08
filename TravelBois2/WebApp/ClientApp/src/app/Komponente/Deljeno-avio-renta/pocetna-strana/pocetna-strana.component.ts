import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../../entities/users/user/user';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { RentACarAdmin } from '../../../entities/users/rent-a-car-admin/rent-a-car-admin'
import { Admin } from '../../../entities/users/admin/admin'
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-pocetna-strana',
  //template: '{{user}}',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit {
  currentUser: User;
  userDetails;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    
    this.currentUser = AppComponent.currentUser;
    
  }
  getType() {
    return AppComponent.tipKorisnika;
  }

  

}

