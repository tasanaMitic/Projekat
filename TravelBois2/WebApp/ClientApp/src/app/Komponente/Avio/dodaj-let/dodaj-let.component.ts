import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-let',
  templateUrl: './dodaj-let.component.html',
  styleUrls: ['./dodaj-let.component.css']
})
export class DodajLetComponent implements OnInit {
  letPodaciForm: FormGroup;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.letPodaciForm = new FormGroup({
      'polaznaDestinacija': new FormControl('', Validators.required),
      'odredisnaDestinacija': new FormControl('', Validators.required),
      'datumPoletanja': new FormControl(''),
      'vremePoletanja': new FormControl('', Validators.required),
      'datumSletanja': new FormControl(''),
      'vremeSletanja': new FormControl('', Validators.required),
      'vremePutovanja': new FormControl('', Validators.required),
      'duzinaPutovanja': new FormControl('', Validators.required),
      //'brojPresedanja': new FormControl('0', Validators.required),
      //'lokacijePresedanja': new FormControl(),
      'cenaKarte': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.letPodaciForm.value);
    console.log(this.letPodaciForm);
  }

  onBack(){
    this.location.back();
  }

}
