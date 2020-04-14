import { Component, OnInit, Input } from '@angular/core';
import { Location} from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { User } from '../entities/users/user/user';

@Component({
  selector: 'app-profil-registrovanog',
  templateUrl: './profil-registrovanog.component.html',
  styleUrls: ['./profil-registrovanog.component.css']
})
export class ProfilRegistrovanogComponent implements OnInit {
  podaciForm: FormGroup;
  currentUser: User;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser ;
    this.initForm(this.currentUser);
  }

  private initForm(currentUser: User)
  {
    this.podaciForm = new FormGroup({
      'ime': new FormControl(currentUser.Ime, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl(currentUser.Prezime, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl(currentUser.Grad, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'brojTelefona': new FormControl(currentUser.BrojTelefona, Validators.required),
      'brojPasosa': new FormControl('', Validators.required),
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
