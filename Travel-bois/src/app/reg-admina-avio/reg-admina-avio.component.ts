import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-admina-avio',
  templateUrl: './reg-admina-avio.component.html',
  styleUrls: ['./reg-admina-avio.component.css']
})
export class RegAdminaAvioComponent implements OnInit {
  regAvioAdminForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.regAvioAdminForm = new FormGroup({
      'ime': new FormControl('ime',[Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl('pr', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl('grad', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'avioKompanija': new FormControl('avioKompanija',Validators.required),    //dodati posle da se ucitava jedna od postojecih aviokompanija
      'brojTelefona': new FormControl('0', Validators.required),
      'brojPasosa': new FormControl('0', Validators.required),
      'username': new FormControl('user', Validators.required),
      'password': new FormControl('pass', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.regAvioAdminForm.value);
    console.log(this.regAvioAdminForm);
  }
}
