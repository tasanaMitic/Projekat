import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  constructor(private location: Location) { }

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

  onBack()
  {
    this.location.back();
  }

}
