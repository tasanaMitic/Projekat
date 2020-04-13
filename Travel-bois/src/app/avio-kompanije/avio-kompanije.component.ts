import { Component, OnInit } from '@angular/core';
import { AvioKompanija } from '../entities/objects/avio-kompanija';
import { User } from '../entities/users/user/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-avio-kompanije',
  templateUrl: './avio-kompanije.component.html',
  styleUrls: ['./avio-kompanije.component.css']
})
export class AvioKompanijeComponent implements OnInit {
  kompanije: Array<AvioKompanija>;
  currentUser: User;

  //ZA CSS
  klasa: string;
  tip: string;

  constructor() { 
    this.kompanije = new Array<AvioKompanija>();
    this.currentUser = AppComponent.currentUser;
    this.klasa = 'kompanija-slika';
    this.tip = 'AvioKompanije';
  }

  ngOnInit(): void {
    this.kompanije.push(new AvioKompanija('Bogdana Suputa 5', 'Jat'));
    this.kompanije.push(new AvioKompanija('Petefi Sandora 9', 'WizzAir'));
  }

}
