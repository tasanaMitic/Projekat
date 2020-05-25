import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder) { }

  formModel = this.fb.group({
    Email :['', [Validators.required, Validators.email]],
    UserName :['', [Validators.required]],
    Name :['', []],
    Lastname :['', []],
    Grad :['', []],
    BrojTelefona :['', []],
    BrojPasosa :['', []],
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
}