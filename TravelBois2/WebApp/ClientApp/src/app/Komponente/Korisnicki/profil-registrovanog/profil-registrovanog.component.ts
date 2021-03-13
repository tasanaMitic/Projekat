import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { User } from '../../../entities/users/user/user';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/user.service';
import { Prijatelj } from '../../../entities/objects/prijatelj';
import { PrihvacenPrijatelj } from '../../../entities/objects/prihvacen-prijatelj'

@Component({
  selector: 'app-profil-registrovanog',
  templateUrl: './profil-registrovanog.component.html',
  styleUrls: ['./profil-registrovanog.component.css']
})
export class ProfilRegistrovanogComponent implements OnInit {
  podaciForm: FormGroup;
  currentUser: RegisteredUser;
  brojP: string;

  prijateljPodaciForm: FormGroup;
  SortForm: FormGroup;
  kriterijum: string;
  empty: number;
  empty1: number;
  empty2: number;
  empty3: number;
  mojiPrijatelji: Array<RegisteredUser>;
  prijatelji: Array<any>;  //lista samo za prikaz, ne ucitava se iz baze
  korisnici: Array<any>;
  korisniciP: Array<any>;
  zahtevi: Array<string>;
  poslatiZahtevi: Array<string>;
  listaPrijatelja: Array<string>;
  idZahteva: Array<{ id: number, username: string }>;
  idPoslatihZahteva: Array<{ id: number, username: string }>;
  idPrijatelja: Array<{ id: number, username: string }>;
  zahteviZaPrijatelja: Array<RegisteredUser>;
  ime: string;
  prezime: string;
  poruka: string;
  prijatelj: Prijatelj;
  prihvacenPrijatelj: PrihvacenPrijatelj;

  constructor(private router: Router, private toastr: ToastrService, private service: UserService, public fb: FormBuilder) {
    this.empty = 0;
    this.empty1 = 0;
    this.empty2 = 0;
    this.empty3 = 0;

    this.SortForm = this.fb.group({
      selectedKriterijum: ['']
    });
   }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser as RegisteredUser ;
    this.initForm(this.currentUser);

    //prijatelji
    this.zahteviZaPrijatelja = new Array<RegisteredUser>();
    this.idZahteva = new Array<{ id: number, username: string}>();
    this.idPoslatihZahteva = new Array<{ id: number, username: string}>();
    this.idPrijatelja = new Array<{ id: number, username: string}>();

    this.ucitajKorisnike();
    this.ucitajKorisnikeP();
    this.ucitajMojeZahteve();
    this.ucitajPrijatelje();
    
  }

  private initForm(currentUser: User)
  {
    this.podaciForm = new FormGroup({
      'ime': new FormControl(this.currentUser.Ime, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'prezime': new FormControl(this.currentUser.Prezime, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      'grad': new FormControl(this.currentUser.Grad, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      'brojTelefona': new FormControl(currentUser.BrojTelefona, Validators.required),
      'brojPasosa': new FormControl(this.currentUser.BrojPasosa, Validators.required),
      'username': new FormControl(this.currentUser.Username, Validators.required),
    });

    this.prijateljPodaciForm = new FormGroup({
      'ime': new FormControl(''),
      'prezime': new FormControl('')
    });
  }

  onSubmit() {
    if ((this.podaciForm.get('brojTelefona').value != this.currentUser.BrojTelefona) || (this.podaciForm.get('grad').value != this.currentUser.Grad) ||
      (this.podaciForm.get('ime').value != this.currentUser.Ime) || (this.podaciForm.get('prezime').value != this.currentUser.Prezime) || (this.podaciForm.get('brojPasosa').value != this.currentUser.BrojPasosa))
    {
      this.brojP = this.podaciForm.get('brojPasosa').value;

      var body = {
        UserName: this.currentUser.Username,
        Name: this.podaciForm.get('ime').value,
        Lastname: this.podaciForm.get('prezime').value,
        Grad: this.podaciForm.get('grad').value,
        BrojTelefona: this.podaciForm.get('brojTelefona').value,
        BrojPasosa: this.brojP.toString(),
      }
      this.service.updateRegisteredUser(body).subscribe(
        (res: any) => {
          this.toastr.success('Uspesno ste izmenili podatke!');
        },
        (err) =>{
          if (err.status == 400) {
            this.toastr.error("Podaci nisu ispravni!");
          }
          else if(err.status == 404){
            this.toastr.error("Korisnik nije pronadjen!");
          }
          else {
            console.log(err);
          }
        }
      );

      
    }
    else {
      this.toastr.error('Morate izmeniti vrednosti polja!');
    }
  }

  //prijatelji
  onSubmitP() {
    this.prijatelji = new Array<any>();
    this.empty3 = 0;

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

    /////////////////////////////////////////////// i ime i prezime
    if (this.ime !== "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.tipKorisnika == "RegularUser") {        
          if (element.name == this.ime) {
            if (element.lastname == this.prezime) {
              if (element.userName != this.currentUser.Username) {
                if (this.zahtevi.some(x => x === element.userName)) {
                  this.empty3 = 1;                
                }
                else if (this.listaPrijatelja.some(x => x === element.userName)) {
                  this.empty3 = 2;
                }
                else if(this.poslatiZahtevi.some(x => x === element.userName)){
                  this.empty3 = 3;
                }
                else {
                  this.prijatelji.push(element);
                  this.empty2 = 1;
                }
              }            
            }
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        if (this.empty3 == 1) { this.poruka = "Ovaj korisnik vam je poslao zahtev!"; }
        else if (this.empty3 == 2) { this.poruka = "Ovaj korisnik vam je vec prijatelj!" }
        else if(this.empty3 == 3) { this.poruka = "Vec ste poslali zahtev ovom korisniku!"}
        else { this.poruka = "Nema korisnika sa tim imenom i prezimenom!"; }     
        
      }
    }
    else if (this.ime !== "" && this.prezime == "") {       //samo ime
      this.korisnici.forEach(element => {
        if (element.tipKorisnika == "RegularUser") {
          if (element.name == this.ime) {
            if (element.userName != this.currentUser.Username) {
              if (this.zahtevi.some(x => x === element.userName)) {
                this.empty3 = 1;
              }
              else if (this.listaPrijatelja.some(x => x === element.userName)) {
                this.empty3 = 2;
              }
              else {
                this.prijatelji.push(element);
                this.empty2 = 1;
              }
            }
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        if (this.empty3 == 1) { this.poruka = "Korisnik sa tim imenom vam je poslao zahtev!"; }
        else { this.poruka = "Nema korisnika sa tim imenom!";}
        
      }
    }
    else if (this.ime == "" && this.prezime !== "") {
      this.korisnici.forEach(element => {
        if (element.tipKorisnika == "RegularUser") {
          if (element.lastname == this.prezime) {
            if (element.userName != this.currentUser.Username) {
              if (this.zahtevi.some(x => x === element.userName)) {
                this.empty3 = 1;
              }
              else if (this.listaPrijatelja.some(x => x === element.userName)) {
                this.empty3 = 2;
              }
              else {
                this.prijatelji.push(element);
                this.empty2 = 1;
              }
            }
          }
        }
      });
      if (this.prijatelji.length == 0) {
        this.empty2 = 2;
        if (this.empty3 == 1) { this.poruka = "Korisnik sa tim prezimenom vam je poslao zahtev!"; }
        else { this.poruka = "Nema korisnika sa tim prezimenom!";}        
      }
    }
    else if (this.ime == "" && this.prezime=="") {
      this.empty2 = 2;
      this.poruka = "Morate uneti ime i/ili prezime!";      
    }   
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

  ucitajKorisnike() {
    this.service.getUsers().subscribe(korisnici => this.korisnici = korisnici);
  }

  ucitajKorisnikeP() {
    this.service.getUsers().subscribe(korisnici => this.korisniciP = korisnici);
  }

  ucitajMojeZahteve() {
    this.zahtevi = new Array<string>();
    this.poslatiZahtevi = new Array<string>();
    this.service.getZahtevi().subscribe(zahtevi =>
      zahtevi.forEach(element => {
        if (element.primio == this.currentUser.Username) {
          this.zahtevi.push(element.poslao);
          this.idZahteva.push({ id: element.id, username: element.poslao });
        }
        else if(element.poslao == this.currentUser.Username){
          this.poslatiZahtevi.push(element.primio);
          this.idPoslatihZahteva.push({ id: element.id, username: element.primio});
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
    this.listaPrijatelja = new Array<string>();
    this.service.getPrijatelji().subscribe(prijatelji => {
      prijatelji.forEach(element => {
        if (element.username1 == this.currentUser.Username) {
          this.listaPrijatelja.push(element.username2);
          this.idPrijatelja.push({ id: element.id, username: element.username2 });
        }
        else if (element.username2 == this.currentUser.Username) {
          this.listaPrijatelja.push(element.username1);
          this.idPrijatelja.push({ id: element.id, username: element.username1 });
        }
      })
    });
  }

  prikaziPrijatelje() {
    this.mojiPrijatelji = new Array<RegisteredUser>();
    this.listaPrijatelja.forEach(element => {
      this.korisniciP.forEach(k => {
        if (k.userName == element) {
          this.mojiPrijatelji.push(new RegisteredUser(k.brojTelefona, k.grad, k.name, k.lastname, k.userName, k.brojPasosa));
        }
      })
    })

    if (this.mojiPrijatelji.length != 0) {
      this.empty = 1;
    }
    else {
      this.toastr.error('Trenutno nemate prijatelja.');
    }
  }

  dodajPrijatelja(username: string) {
    if(this.poslatiZahtevi.some(x => x === username)){
      this.poruka = "Vec ste poslali zahtev ovom korisniku!";
      this.empty2 = 2;
    }
    else{
      this.prijatelj = new Prijatelj(username, this.currentUser.Username);
      this.service.sendZahtev(this.prijatelj).subscribe();
      this.empty2 = 2;
      this.poruka = "Zahtev za prijateljstvo poslat!";

      this.korisnici = this.korisnici.filter(k => k.userName != username);
    }

    
  }

  ukloniPrijatelja(username: string) {
    this.idPrijatelja.forEach(element => {
      if (element.username == username) {
        this.service.deletePrijatelj(element.id).subscribe();
        this.mojiPrijatelji = this.mojiPrijatelji.filter(f => f.Username != username);
        if (this.mojiPrijatelji.length == 0) {
          this.empty = 0;
          this.toastr.success("Refreshujte stranicu.");
        }
        
      }
    })

    this.ucitajPrijatelje();
  }


  prihvatiPrijatelja(username: string) {
    this.idZahteva.forEach(element => {
      if (element.username == username) {
        this.service.deleteZahtev(element.id).subscribe();
        this.zahteviZaPrijatelja = this.zahteviZaPrijatelja.filter(f => f.Username != username);
        this.idZahteva = this.idZahteva.filter(f => f.username != username);
        this.empty = 0
        if (this.zahteviZaPrijatelja.length == 0) {
          this.empty1 = 0;
        }
      }
    })

    //////plus dodavanje u listu prijatelja
    this.prihvacenPrijatelj = new PrihvacenPrijatelj(this.currentUser.Username, username);
    this.service.addPrijatelj(this.prihvacenPrijatelj).subscribe();
    this.ucitajMojeZahteve();
    this.ucitajPrijatelje();
    this.prikaziPrijatelje();
  }

  odbijPrijatelja(username: string) {
    this.idZahteva.forEach(element => {
      if (element.username == username) {
        this.service.deleteZahtev(element.id).subscribe();
        this.zahteviZaPrijatelja = this.zahteviZaPrijatelja.filter(f => f.Username != username);
        if (this.zahteviZaPrijatelja.length == 0) {
          this.empty1 = 0;
          this.toastr.success("Refreshujte stranicu.");
        }
      }
    })
    this.ucitajMojeZahteve();
  }

  onBack()
  {
    this.router.navigateByUrl('/pocetna');
  }

  

}
