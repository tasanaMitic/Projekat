import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Let } from '../../../entities/objects/let';
import { LetoviService } from '../../../shared/letovi.service';
import { element } from 'protractor';
import { Aerodrom } from '../../../entities/objects/aerodrom';

@Component({
  selector: 'app-dodaj-let',
  templateUrl: './dodaj-let.component.html',
  styleUrls: ['./dodaj-let.component.css']
})
export class DodajLetComponent implements OnInit {
  letPodaciForm: FormGroup;
  tip: String;
  empty: number;
  let: Let;
  polaznaDestinacija: string;
  odredisnaDestinacija: string;
  datumPoletanja: string;
  vremePoletanja: string;
  datumSletanja: string;
  vremeSletanja: string;
  vremePutovanja: string;
  duzinaPutovanja: number;
  klasa: string;
  tipLeta: string;
  lokacije: string;
  lokacijePresedanja: Array<string>;
  cenaKarte: number;
  listaAerodroma: Array<Aerodrom>;
  grad: string;
  drzava: string;
  aerodrom: Aerodrom;

  constructor(private location: Location, private service: LetoviService) {
    this.empty = 0;
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.letPodaciForm = new FormGroup({
      'polaznaDestinacija': new FormControl('', Validators.required),
      'odredisnaDestinacija': new FormControl('', Validators.required),
      'datumPoletanja': new FormControl('', Validators.required),
      'vremePoletanja': new FormControl('', Validators.required),
      'datumSletanja': new FormControl('', Validators.required),
      'vremeSletanja': new FormControl('', Validators.required),
      'vremePutovanja': new FormControl('', Validators.required),
      'duzinaPutovanja': new FormControl('', Validators.required),
      'klasa': new FormControl('', Validators.required),
      'tipLeta': new FormControl('', Validators.required),
      'lokacijePresedanja': new FormControl('',),
      'cenaKarte': new FormControl('', Validators.required)
    });

    this.letPodaciForm.controls['klasa'].setValue('economy');
    this.letPodaciForm.controls['tipLeta'].setValue('oneWay');

  }

  radioButton(e: string): void {
    this.tip = e;
    if (this.tip == 'multiCity') {
      this.empty = 1;
    }
    else {
      this.empty = 0;
    }
  }  

  onSubmit() {
    this.lokacijePresedanja = new Array<string>();
    this.listaAerodroma = new Array<Aerodrom>();
    this.polaznaDestinacija = this.letPodaciForm.get('polaznaDestinacija').value;
    this.odredisnaDestinacija = this.letPodaciForm.get('odredisnaDestinacija').value;
    this.datumPoletanja = this.letPodaciForm.get('datumPoletanja').value;
    this.vremePoletanja = this.letPodaciForm.get('vremePoletanja').value;
    this.datumSletanja = this.letPodaciForm.get('datumSletanja').value;
    this.vremeSletanja = this.letPodaciForm.get('vremeSletanja').value;
    this.vremePutovanja = this.letPodaciForm.get('vremePutovanja').value;
    this.duzinaPutovanja = this.letPodaciForm.get('duzinaPutovanja').value;
    this.klasa = this.letPodaciForm.get('klasa').value;
    this.tipLeta = this.letPodaciForm.get('tipLeta').value;
    this.lokacije = this.letPodaciForm.get('lokacijePresedanja').value;
    if (this.lokacije != "") {
    this.lokacijePresedanja = this.lokacije.split(",");
    
      this.lokacijePresedanja.forEach(element => {
        let a = element.split("/");
        this.grad = a[0];
        this.drzava = a[1];
        this.aerodrom = new Aerodrom(this.grad, this.drzava);
        this.listaAerodroma.push(this.aerodrom);
      })
    }
    this.cenaKarte = this.letPodaciForm.get('cenaKarte').value;

    console.log(this.lokacijePresedanja);

    this.let = new Let(this.polaznaDestinacija, this.odredisnaDestinacija, this.datumPoletanja, this.vremePoletanja, this.datumSletanja, this.vremeSletanja, this.vremePutovanja, this.duzinaPutovanja, this.klasa, this.tipLeta, this.listaAerodroma, this.cenaKarte);
    this.service.addLet(this.let).subscribe();
    window.location.reload();
    this.location.back();
  }

  onBack(){
    this.location.back();
  }

}
