import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BaseURI = 'https://localhost:44343/api';
  constructor(private fb:FormBuilder, private http: HttpClient) { }

  userFormModel = this.fb.group({
    Email :['', [Validators.required, Validators.email]],
    UserName :['', [Validators.required]],
    Name: ['', [Validators.required]],
    Lastname: ['', [Validators.required]],
    Grad: ['', [Validators.required]],
    BrojTelefona: ['', [Validators.required]],
    BrojPasosa: ['', [Validators.required]],
    Passwords: this.fb.group({
      Password :['', [Validators.required]],
      ConfirmPassword :['', [Validators.required]]
    }, {validator: this.comparePasswords})
  });
  rentAdminFormModel = this.fb.group({
    Email :['', [Validators.required, Validators.email]],
    UserName :['', [Validators.required]],
    Name: ['', [Validators.required]],
    Lastname: ['', [Validators.required]],
    Grad: ['', [Validators.required]],
    NazivKompanije: ['', [Validators.required]],
    BrojTelefona: ['', [Validators.required]],
    BrojPasosa: ['', [Validators.required]],
    Passwords: this.fb.group({
      Password :['', [Validators.required]],
      ConfirmPassword :['', [Validators.required]]
    }, {validator: this.comparePasswords})
  });
  avioAdminFormModel = this.fb.group({
    Email :['', [Validators.required, Validators.email]],
    UserName :['', [Validators.required]],
    Name: ['', [Validators.required]],
    Lastname: ['', [Validators.required]],
    Grad: ['', [Validators.required]],
    NazivAviokompanije: ['', [Validators.required]],
    BrojTelefona: ['', [Validators.required]],
    BrojPasosa: ['', [Validators.required]],
    Passwords: this.fb.group({
      Password :['', [Validators.required]],
      ConfirmPassword :['', [Validators.required]]
    }, {validator: this.comparePasswords})
  });

  comparePasswords(fb: FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if(confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({passwordMismatch: true});
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  registerUser() {
    console.debug('callback register rent admin')
    var body = {
      Email: this.userFormModel.value.Email,
      UserName: this.userFormModel.value.UserName,
      Name: this.userFormModel.value.Name,
      Lastname: this.userFormModel.value.Lastname,
      Grad: this.userFormModel.value.Grad,
      BrojTelefona: this.userFormModel.value.BrojTelefona,
      BrojPasosa: this.userFormModel.value.BrojPasosa,
      Password: this.userFormModel.value.Passwords.Password,
      TipKorisnika: 'RegularUser'
    }
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
  registerRentAdmin() {
    console.debug('callback register')
    var body = {
      Email: this.rentAdminFormModel.value.Email,
      UserName: this.rentAdminFormModel.value.UserName,
      Name: this.rentAdminFormModel.value.Name,
      Lastname: this.rentAdminFormModel.value.Lastname,
      Grad: this.rentAdminFormModel.value.Grad,
      NazivKompanije: this.rentAdminFormModel.value.NazivKompanije,
      BrojTelefona: this.rentAdminFormModel.value.BrojTelefona,
      BrojPasosa: this.rentAdminFormModel.value.BrojPasosa,
      Password: this.rentAdminFormModel.value.Passwords.Password,
      TipKorisnika: 'RentAdmin'
    }
    return this.http.post(this.BaseURI + '/RentAdmin/Register', body);
  }
  registerAvioAdmin() {
    console.debug('callback register')
    var body = {
      Email: this.avioAdminFormModel.value.Email,
      UserName: this.avioAdminFormModel.value.UserName,
      Name: this.avioAdminFormModel.value.Name,
      Lastname: this.avioAdminFormModel.value.Lastname,
      Grad: this.avioAdminFormModel.value.Grad,
      NazivAviokompanije: this.avioAdminFormModel.value.NazivAviokompanije,
      BrojTelefona: this.avioAdminFormModel.value.BrojTelefona,
      BrojPasosa: this.avioAdminFormModel.value.BrojPasosa,
      Password: this.avioAdminFormModel.value.Passwords.Password,
      TipKorisnika: 'AvioAdmin'
    }
    return this.http.post(this.BaseURI + '/AvioAdmin/Register', body);
  }
  externalLogin(formData){
    return this.http.post(this.BaseURI + '/ApplicationUser/SocialLogin',formData);
  }
  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }
  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile');
  }
}
