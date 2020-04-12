import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reg-admina-rente',
  templateUrl: './reg-admina-rente.component.html',
  styleUrls: ['./reg-admina-rente.component.css']
})
export class RegAdminaRenteComponent implements OnInit {
  regRenteAdminForm: FormGroup;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.regRenteAdminForm = new FormGroup({
      'ime': new FormControl('',[Validators.required,Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'rentaKompanija': new FormControl('',Validators.required),    //dodati posle da se ucitava jedna od postojecih aviokompanija
      'brojTelefona': new FormControl('', Validators.required),
      'brojPasosa': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.regRenteAdminForm.value);
    console.log(this.regRenteAdminForm);
  }

  onBack()
  {
    this.location.back();
  }

}
