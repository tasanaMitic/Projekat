import { Component, OnInit } from '@angular/core';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';
import { User } from '../../../entities/users/user/user';
import { AppComponent } from '../../../app.component';
import { Let } from '../../../entities/objects/let';
import { Kola } from '../../../entities/objects/kola';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avio-kompanije',
  templateUrl: './avio-kompanije.component.html',
  styleUrls: ['./avio-kompanije.component.css']
})
export class AvioKompanijeComponent implements OnInit {
  kompanije: Array<AvioKompanija>;
  SortForm: FormGroup;
  currentUser: User;

  //ZA CSS
  klasa: string;
  tip: string;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.kompanije = new Array<AvioKompanija>();   
    this.klasa = 'kompanija-slika';
    this.tip = 'AvioKompanije';

    this.SortForm = this.fb.group({
      selectedKriterijum: ['']
    });
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

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser;
    this.kompanije.push(new AvioKompanija('Jat', 'Bogdana Suputa 5', 'Beograd'));
    this.kompanije.push(new AvioKompanija('WizzAir', 'Petefi Sandora 9','Abu dabi'));
  }

  oceni(naziv: string) {
    this.router.navigateByUrl('/oceni/' + naziv);
    //window.open('https://localhost:44343/oceni/' + naziv, "_self");
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


}
