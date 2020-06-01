import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { element } from 'protractor';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.css']
})
export class PrijateljiComponent implements OnInit {
  prijateljPodaciForm: FormGroup;
  SortForm: FormGroup;
  kriterijum: string;
  empty: number;
  empty1: number;
  empty2: number;
  mojiPrijatelji: Array<RegisteredUser>;
  prijatelji: Array<RegisteredUser>;  //lista samo za prikaz, ne ucitava se iz baze
  korisnici: Array<RegisteredUser>;
  zahtevi: Array<RegisteredUser>;
  ime: string;
  prezime: string;
  poruka: string;

  constructor(private location: Location, public fb: FormBuilder) {
    this.empty = 0;
    this.empty1 = 0;
    this.empty2 = 0;

    this.SortForm = this.fb.group({
      selectedKriterijum: ['']
    });
  }

  ngOnInit(): void {
    this.initForm();

    this.ucitajZahteve();
    this.ucitajKorisnike();
    this.ucitajPrijatelje();
  }

  initForm() {
    this.prijateljPodaciForm = new FormGroup({
      'ime': new FormControl(''),
      'prezime': new FormControl('')
    });
  }

  KriterijumChanged(e) {
    this.kriterijum = this.SortForm.get('selectedKriterijum').value;
    this.sortiraj(this.kriterijum);
  }

  sortiraj(kriterijum: string) {
    if (kriterijum == 'ime') {
      this.mojiPrijatelji.sort((a, b) => a.Ime.localeCompare(b.Ime));
    }
    else if (kriterijum == 'prezime') {
      this.mojiPrijatelji.sort((a, b) => a.Prezime.localeCompare(b.Prezime));
    }
  }

  onSubmit() { 
    this.prijatelji = new Array<RegisteredUser>();
    if (this.prijateljPodaciForm.get('ime').value !== "") {
      this.ime = this.prijateljPodaciForm.get('ime').value;
    }
    else {
      this.ime = "";
    }

    if (this.prijateljPodaciForm.get('prezime').value !== "") {
      this.prezime = this.prijateljPodaciForm.get('prezime').value;
    }
    else {
      this.prezime = "";
    }

    if (this.ime !== "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.Ime == this.ime) {
          if (element.Prezime == this.prezime) {
            this.prijatelji.push(element);
            this.empty2 = 1;
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim imenom i/ili prezimenom!";
      }
    }
    else if (this.ime !== "" && this.prezime == "") {
      this.korisnici.forEach(element => {
        if (element.Ime == this.ime) {
          this.prijatelji.push(element);
          this.empty2 = 1;
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim imenom i/ili prezimenom!";
      }
    }
    else if (this.ime == "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.Prezime == this.prezime) {
          this.prijatelji.push(element);
          this.empty2 = 1;
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim imenom i/ili prezimenom!";
      }
    }
    else if (this.ime == "" && this.prezime=="") {
      this.empty2 = 2;
      this.poruka = "Morate uneti ime i/ili prezime!";      
    }   
  }





  ucitajKorisnike() {//ucitaj sve registrovane korisnike u sistemu
    this.korisnici = new Array<RegisteredUser>();

    //
    this.korisnici.push(new RegisteredUser('063123457', 'Beograd', 'Ivana', 'Mitic', 'ivana', 'sifra', 123));
    this.korisnici.push(new RegisteredUser('063123457', 'Beograd', 'Dragana', 'Mitic', 'dragana', 'sifra', 123));
  }
  ucitajZahteve() {
    this.zahtevi = new Array<RegisteredUser>();

    //////
    this.zahtevi.push(new RegisteredUser('063123457', 'Beograd', 'Jovana', 'Mitic', 'tasana', 'sifra', 123));
    this.zahtevi.push(new RegisteredUser('063123457', 'Beograd', 'Luka', 'Mitic', 'nikola', 'sifra', 123));
    this.empty1 = 1;
  }
  ucitajPrijatelje() {//ucitaj prijatelje trenutnog korisnika
    this.mojiPrijatelji = new Array<RegisteredUser>();

    ////// nece ici ovako
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Tasana', 'Mitic', 'tasana', 'sifra', 123));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Nikola', 'Jurisic', 'nikola', 'sifra', 123));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Petar', 'Petrovic', 'nikola', 'sifra', 123));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Andjela', 'Pejakovic', 'nikola', 'sifra', 123));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Jovan', 'Tatic', 'nikola', 'sifra', 123));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Petar', 'Zmijanjac', 'nikola', 'sifra', 123));
    this.empty = 1;
  }

  dodajPrijatelja(username: string) {
    this.empty2 = 2;
    this.poruka = "Zahtev za prijateljstvo poslat!";

    //posalji zahtev servisu
  }

  ukloniPrijatelja(username: string) { }
  prihvatiPrijatelja(username: string) { }
  odbijPrijatelja(username: string) {}

  onBack()
  {
    this.location.back();
  } 

}
