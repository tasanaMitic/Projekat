import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { NoSpecialChars, NoSpace, ValidateNumber, ValidatePassword, NoFullstop } from 'src/app/Helpers/custom-validators/custom-validators';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.registrationForm = new FormGroup({
      'ime': new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3), NoSpecialChars, NoSpace]),
      'prezime': new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3), NoSpecialChars, NoSpace]),
      'grad': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3), NoSpecialChars]),
      'brojTelefona': new FormControl('', [Validators.required, ValidateNumber, NoFullstop]),
      'brojPasosa': new FormControl('', [Validators.required, ValidateNumber, NoFullstop]),
      'username': new FormControl('', [Validators.required, NoSpecialChars, NoSpace]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), ValidatePassword, NoSpecialChars]),
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    console.log(this.registrationForm);
    console.log("register submit");
  }

  onBack()
  {
    this.location.back();
  }

}
