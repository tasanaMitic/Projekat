import { Component, OnInit } from '@angular/core';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';
import { User } from '../../../entities/users/user/user';
import { AppComponent } from '../../../app.component';
import { Let } from '../../../entities/objects/let';
import { Kola } from '../../../entities/objects/kola';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AvioAdminService } from '../../../shared/avio-admin.service';
import { element } from 'protractor';
import { OcenaService } from '../../../shared/ocena.service';
import { Ocena } from '../../../entities/misc/ocena';

@Component({
  selector: 'app-avio-kompanije',
  templateUrl: './avio-kompanije.component.html',
  styleUrls: ['./avio-kompanije.component.css']
})
export class AvioKompanijeComponent implements OnInit {
  kompanije: Array<AvioKompanija>;
  SortForm: FormGroup;
  currentUser: User;
  ocene: Array<Ocena>;
  listaOcena: number;
  broj: number;
  OceneAviokompanije: Array<Ocena>
  aviokompanija: AvioKompanija;


  //ZA CSS
  klasa: string;
  tip: string;

  constructor(private router: Router, public fb: FormBuilder, private service: AvioAdminService, private serviceO: OcenaService) {
    this.currentUser = AppComponent.currentUser;
    this.ocene = new Array<Ocena>();

    this.klasa = 'kompanija-slika';
    this.tip = 'AvioKompanije';

    this.SortForm = this.fb.group({
      selectedKriterijum: ['']
    });
  }

  ngOnInit(): void {
    this.kompanije = new Array<AvioKompanija>();
    this.OceneAviokompanije = new Array<Ocena>();

    

    this.service.getAviokompanije().subscribe(aviokompanije =>
      aviokompanije.forEach(element => {
        this.aviokompanija = new AvioKompanija(element.naziv, element.adresa, element.grad, element.opis);        

        AppComponent.OceneAviokompanije.forEach(k => {
          if (k.kompanija == element.naziv) {
            this.aviokompanija.OceneAviokompanije.push(new Ocena(k.value, k.userID, k.kompanija));
          }
        })
        this.kompanije.push(this.aviokompanija);
      }));
    
  }

  KriterijumChanged(e) {
    this.sortiraj(this.SortForm.get('selectedKriterijum').value);
  }

  sortiraj(kriterijum: string) {
    console.log(kriterijum);
    if (kriterijum == 'naziv') {
      this.kompanije.sort((a, b) => a.naziv.localeCompare(b.naziv));
    }
    else if (kriterijum == 'grad') {
      this.kompanije.sort((a, b) => a.grad.localeCompare(b.grad));
    }
    else if (kriterijum == 'prosecna ocena') {
      //this.kompanije.sort((a, b) => a.ProsecnaOcena() - b.ProsecnaOcena());
    }
  }

  oceni(naziv: string) {
    this.router.navigateByUrl('/oceni/' + naziv);
  }  

  letoviUrl(url: string) {
    this.router.navigateByUrl('/letovi/' + url);
  }

  getType(){
    return this.currentUser.constructor.name;
  }

  onBack() {
    this.router.navigateByUrl('/pocetna');
  }

  IzracunajProsecnuOcenu(kompanija: string) {
    this.kompanije.forEach(element => {
      if (element.naziv == kompanija) {
        return element.ProsecnaOcena();
      }
    })
  }


}
