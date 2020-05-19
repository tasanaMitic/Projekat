import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)])
    });
  }

  onBack()
  {
    this.location.back();
  }

  onSubmit(){
    console.debug("submit");
  }
}
