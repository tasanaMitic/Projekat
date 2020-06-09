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
  userName: string;
  grad: string;
  name: string;
  lastname: string;
  brojTelefona: string;
  brojPasosa: string;
  tipKorisnika: string;


  constructor(private service: UserService) { }

  ngOnInit(): void {
    
    this.currentUser = AppComponent.currentUser;
    this.provera();
  }
  getType() {
    return AppComponent.tipKorisnika;
  }

  provera() {
    this.service.getUserProfile().subscribe(
      res => {
        if (res != null) {
          this.userDetails = res;
          this.userName = this.userDetails.userName;
          this.name = this.userDetails.name;
          this.lastname = this.userDetails.lastname;
          this.brojPasosa = this.userDetails.brojPasosa;
          this.brojTelefona = this.userDetails.brojTelefona;
          this.tipKorisnika = this.userDetails.tipKorisnika;
          this.grad = this.userDetails.grad;
          if (this.tipKorisnika == 'RegularUser') {
            AppComponent.tipKorisnika = "RegisteredUser";
            AppComponent.currentUser = new RegisteredUser(this.brojTelefona, this.grad, this.name, this.lastname, this.userName, parseInt(this.brojPasosa));
          }
          else if (this.tipKorisnika == 'AvioAdmin') {
            AppComponent.tipKorisnika = "AvioAdmin";
          }
          else if (this.tipKorisnika == 'RentaAdmin') {
            AppComponent.tipKorisnika = "RentACarAdmin";
          }
          else {
            AppComponent.tipKorisnika = "Admin";
          }
          
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

  

}

