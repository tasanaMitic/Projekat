import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.registrationForm = new FormGroup({
      'ime': new FormControl('ime', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl('pr', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl('grad', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'brojTelefona': new FormControl('0', Validators.required),
      'brojPasosa': new FormControl('0', Validators.required),
      'username': new FormControl('user', Validators.required),
      'password': new FormControl('pass', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    console.log(this.registrationForm);
  }

}
