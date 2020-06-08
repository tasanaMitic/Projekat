import { Component, OnInit, Input } from '@angular/core';
import { Location} from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { User } from '../../../entities/users/user/user';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';

@Component({
  selector: 'app-profil-registrovanog',
  templateUrl: './profil-registrovanog.component.html',
  styleUrls: ['./profil-registrovanog.component.css']
})
export class ProfilRegistrovanogComponent implements OnInit {
  podaciForm: FormGroup;
  currentUser: RegisteredUser;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser as RegisteredUser ;
    this.initForm(this.currentUser);
  }

  private initForm(currentUser: User)
  {
    this.podaciForm = new FormGroup({
      'ime': new FormControl(this.currentUser.Ime, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl(this.currentUser.Prezime, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl(this.currentUser.Grad, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'brojTelefona': new FormControl(currentUser.BrojTelefona, Validators.required),
      'brojPasosa': new FormControl(this.currentUser.BrojPasosa, Validators.required),
      'username': new FormControl(this.currentUser.Username, Validators.required),
      'password': new FormControl(this.currentUser.Password, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.podaciForm.value);
    console.log(this.podaciForm);
  }

  onBack()
  {
    this.location.back();
  }

  

}
