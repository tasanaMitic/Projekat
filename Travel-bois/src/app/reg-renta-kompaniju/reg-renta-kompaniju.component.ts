import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-renta-kompaniju',
  templateUrl: './reg-renta-kompaniju.component.html',
  styleUrls: ['./reg-renta-kompaniju.component.css']
})
export class RegRentaKompanijuComponent implements OnInit {
  regRentaForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.regRentaForm = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'opis': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.regRentaForm.value);
    console.log(this.regRentaForm);
  }

}
