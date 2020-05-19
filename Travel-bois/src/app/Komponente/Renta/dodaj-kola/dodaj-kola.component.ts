import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipVozila } from 'src/app/_enums';

@Component({
  selector: 'app-dodaj-kola',
  templateUrl: './dodaj-kola.component.html',
  styleUrls: ['./dodaj-kola.component.css']
})
export class DodajKolaComponent implements OnInit {
  carForm: FormGroup;
  constructor() {
    let year = new Date();
    this.carForm = new FormGroup({
      'brojMesta': new FormControl('valid', [Validators.required, Validators.min(1)]),
      'godiste': new FormControl('valid', [Validators.required, Validators.min(1900), Validators.max(year.getFullYear())]),
      'cena': new FormControl('valid', [Validators.required, Validators.min(1)])
            })
   }

  ngOnInit(): void {
  }
  GetTipovi(): Array<string>
  {
    let len =  Object.keys(TipVozila).length / 2;
    let ret = new Array<string>();
    for (let i = 0; i < len; i++){
      ret.push(TipVozila[i].toString());
    }
    return ret;
  }
}
