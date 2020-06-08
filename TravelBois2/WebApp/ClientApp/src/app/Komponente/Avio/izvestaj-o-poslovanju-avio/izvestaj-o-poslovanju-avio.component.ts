import { Component, OnInit } from '@angular/core';
import { AvioAdmin } from 'src/app/entities/users/avio-admin/avio-admin';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { element } from 'protractor';
import { Let } from 'src/app/entities/objects/let';
import { LetoviComponent } from '../letovi/letovi.component';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { LetoviService } from '../../../shared/letovi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-izvestaj-o-poslovanju-avio',
  templateUrl: './izvestaj-o-poslovanju-avio.component.html',
  styleUrls: ['./izvestaj-o-poslovanju-avio.component.css']
})
export class IzvestajOPoslovanjuAvioComponent implements OnInit {
  currentUser: AvioAdmin;
  LetSelectForm: FormGroup;
  NedeljaSelectForm: FormGroup;
  MesecSelectForm: FormGroup;
  GodinaSelectForm: FormGroup;
  toDate: NgbDateStruct;
  ocenaLeta: number;
  prihodNedelje: number;
  prihodMeseca: number;
  prihodGodine: number;
  Letovi = new Array<Let>();
  Nedelje = new Array<number>();
  Meseci = new Array<string>();
  Godine = new Array<number>();

  constructor(private service: LetoviService, public fb: FormBuilder, calendar: NgbCalendar, private router: Router) {
    var CurrntMonth: string[] = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Octobar", "Novembar", "Decembar",];
    this.Godine.push(2019);

    ///////
    this.LetSelectForm = this.fb.group({
      selectedLet: ['']
    });

    this.NedeljaSelectForm = this.fb.group({
      selectedNedelja: ['']
    });

    this.MesecSelectForm = this.fb.group({
      selectedMesec: ['']
    });

    this.GodinaSelectForm = this.fb.group({
      selectedGodina: ['']
    });
    ////////////////////////////////////////punjenje lista

    var broj = this.GetWeekNmbr(new Date());
    var pocetak = 0;
    do {
      pocetak += 1;
      this.Nedelje.push(pocetak);
    } while (pocetak !== broj)

    var br = 0;
    do {
      this.Meseci.push(CurrntMonth[br]);
      br += 1;
    }
    while (br <= this.getMonth())
    /////////////////////////////

    this.currentUser = AppComponent.currentUser as AvioAdmin;


    //
    //this.Letovi.push(new Let(0, this.currentUser.avioKompanija, 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Bec', new Avion(10000, 20, 5000, 30, 1000, 50)));
    //this.Letovi.push(new Let(1, this.currentUser.avioKompanija, 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Prag', new Avion(10000, 20, 5000, 30, 1000, 50)));
  }

  ngOnInit(): void {
  }

  GetWeekNmbr(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000);
  }

  getMonth(): number {
    var month = new Date();
    var CrrntMonth = month.getMonth();
    return CrrntMonth;
  }  



  GetOcena() {
    //return this.currentUser.avioKompanija.ProsecnaOcena();
    return 0;
  }

  GetLetoviId() {
    //this.service

    //let Letovi = this.currentUser.avioKompanija.letovi;

    //let ids = new Array<number>();
    //this.Letovi.forEach(element => {
    //  ids.push(element.ID);
    //});
    //return ids;
  }

  GetLetoviById(id): Let {
    let letovi = this.currentUser.avioKompanija.letovi;
    let ret = null;
    this.Letovi.forEach(element => {
      //if (element.ID == id) {
      //  ret = element;
      //}
    });
    return ret;
  }

  LetChanged(e) {
    this.ocenaLeta = this.GetLetoviById(this.LetSelectForm.get('selectedLet').value).ProsecnaOcena();
  }

  NedeljaChanged(e) {
    //this.prihodNedelje =   ///IZRACUNATI PRIHOD U OVOJ NEDELJI
  }

  MesecChanged(e) {
    //this.prihodMeseca =  ///IZRACUNATI PRIHOD U MESECU
  }

  GodinaChanged(e) {
    //this.prihodGodine =      ///IZRACUNATI PRIHOD GODINE
  }

  onBack(){
    this.router.navigateByUrl('/pocetna');
  }

}
