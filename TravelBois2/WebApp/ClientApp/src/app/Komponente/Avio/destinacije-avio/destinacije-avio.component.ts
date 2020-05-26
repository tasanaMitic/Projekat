import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-destinacije-avio',
  templateUrl: './destinacije-avio.component.html',
  styleUrls: ['./destinacije-avio.component.css']

})
export class DestinacijeAvioComponent implements OnInit {
  destinacijePodaciForm: FormGroup;
  public empty = 0;
  lokacije: Array<string>;

  constructor(private location: Location) {
    this.lokacije = new Array<string>();

  }

  ngOnInit(): void {
    this.initForm();
    this.lokacije.push('Pariz');
    this.lokacije.push('London');
    this.lokacije.push('Bec');
    this.lokacije.push('Beograd');
    this.empty = 1;
  }

  initForm() {
    this.destinacijePodaciForm = new FormGroup({
      'grad': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.destinacijePodaciForm.value);
    console.log(this.destinacijePodaciForm);}
  ukloniGrad() {}

  onBack(){
    this.location.back();
  }

}
