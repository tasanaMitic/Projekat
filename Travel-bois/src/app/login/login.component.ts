import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.logInForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.logInForm.value);
    console.log(this.logInForm);
  }

}
