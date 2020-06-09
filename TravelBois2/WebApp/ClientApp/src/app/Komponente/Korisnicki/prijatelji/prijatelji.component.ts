import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../entities/users/user/user';
import { AppComponent } from '../../../app.component';
import { Prijatelj } from '../../../entities/objects/prijatelj';
import { ToastrService } from 'ngx-toastr';
import { PrijateljID } from '../../../entities/objects/prijatelj-id';

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
  prijatelji: Array<any>;  //lista samo za prikaz, ne ucitava se iz baze
  korisnici: Array<any>;
  zahtevi: Array<string>;
  idZahteva: Array<{ id: number, username: string }>;
  zahteviZaPrijatelja: Array<RegisteredUser>;
  ime: string;
  prezime: string;
  poruka: string;
  currentUser: RegisteredUser;
  prijatelj: Prijatelj;

  constructor(private router: Router, public fb: FormBuilder, private service: UserService, private toastr: ToastrService) {
    this.empty = 0;
    this.empty1 = 0;
    this.empty2 = 0;

    this.SortForm = this.fb.group({
      selectedKriterijum: ['']
    });
  }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.zahteviZaPrijatelja = new Array<RegisteredUser>();
    this.idZahteva = new Array<{ id: number, username: string}>();
    this.initForm();

    this.ucitajKorisnike();
    this.ucitajZahteve();
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
    this.prijatelji = new Array<any>();

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

    ///////////////////////////////////////////////
    if (this.ime !== "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.name == this.ime) {
          if (element.lastname == this.prezime) {
            if (element.userName != this.currentUser.Username) {            
              this.prijatelji.push(element);
              this.empty2 = 1;
            }            
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim imenom i prezimenom!";
      }
    }
    else if (this.ime !== "" && this.prezime == "") {
      this.korisnici.forEach(element => {
        if (element.name == this.ime) {
          if (element.userName != this.currentUser.Username) {
            this.prijatelji.push(element);
            this.empty2 = 1;
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim imenom!";
      }
    }
    else if (this.ime == "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.lastname == this.prezime) {
          if (element.userName != this.currentUser.Username) {
            this.prijatelji.push(element);
            this.empty2 = 1;
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        this.poruka = "Nema korisnika sa tim prezimenom!";
      }
    }
    else if (this.ime == "" && this.prezime=="") {
      this.empty2 = 2;
      this.poruka = "Morate uneti ime i/ili prezime!";      
    }   
  }

  ucitajKorisnike() {
    this.service.getUsers().subscribe(korisnici => this.korisnici = korisnici);
  }

  ucitajZahteve() {
    this.zahtevi = new Array<string>();
    this.service.getZahtevi().subscribe(zahtevi =>
      zahtevi.forEach(element => {
        if (element.primio == this.currentUser.Username) {
          this.zahtevi.push(element.poslao);
          this.idZahteva.push({ id: element.id, username: element.poslao });
        }
      }));    
  }

  prikaziZahteve() {
    this.zahtevi.forEach(element => {
      this.korisnici.forEach(k => {
        if (k.userName == element) {
          this.zahteviZaPrijatelja.push(new RegisteredUser(k.brojTelefona, k.grad, k.name, k.lastname, k.userName, k.brojPasosa));
        }
      })
    })

    if (this.zahteviZaPrijatelja.length != 0) {
      this.empty1 = 1;
    }
    else {
      this.toastr.error( 'Trenutno nemate zahteve za prijateljstvo.');
    }
  }


  ucitajPrijatelje() {//ucitaj prijatelje trenutnog korisnika
    this.mojiPrijatelji = new Array<RegisteredUser>();

    ////// nece ici ovako
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Tasana', 'Mitic', 'tasana', '123'));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Nikola', 'Jurisic', 'nikola', '123'));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Petar', 'Petrovic', 'nikola', '123'));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Andjela', 'Pejakovic', 'nikola', '123'));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Jovan', 'Tatic', 'nikola', '123'));
    this.mojiPrijatelji.push(new RegisteredUser('063123457', 'Beograd', 'Petar', 'Zmijanjac', 'nikola', '123'));
    this.empty = 1;
  }

  dodajPrijatelja(username: string) {
    this.prijatelj = new Prijatelj(username, this.currentUser.Username);
    this.service.sendZahtev(this.prijatelj).subscribe();
    this.empty2 = 2;
    this.poruka = "Zahtev za prijateljstvo poslat!";
  }

  ukloniPrijatelja(username: string) { }
  prihvatiPrijatelja(username: string) { }

  odbijPrijatelja(username: string) {
    this.idZahteva.forEach(element => {
      if (element.username == username) {
        this.service.deleteZahtev(element.id).subscribe();
        this.zahteviZaPrijatelja = this.zahteviZaPrijatelja.filter(f => f.Username != username);
        if (this.zahteviZaPrijatelja.length == 0) {
          this.empty1 = 0;
        }
      }
    })
  }

  onBack()
  {
    this.router.navigateByUrl('/pocetna');
  } 

}
