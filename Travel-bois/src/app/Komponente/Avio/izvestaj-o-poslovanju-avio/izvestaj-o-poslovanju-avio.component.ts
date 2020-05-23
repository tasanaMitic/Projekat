import { Component, OnInit } from '@angular/core';
import { AvioAdmin } from 'src/app/entities/users/avio-admin/avio-admin';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { element } from 'protractor';
import { Let } from 'src/app/entities/objects/let';
import { LetoviComponent } from '../letovi/letovi.component';
import { Avion } from 'src/app/entities/objects/avion';
import {Location} from '@angular/common';

@Component({
  selector: 'app-izvestaj-o-poslovanju-avio',
  templateUrl: './izvestaj-o-poslovanju-avio.component.html',
  styleUrls: ['./izvestaj-o-poslovanju-avio.component.css']
})
export class IzvestajOPoslovanjuAvioComponent implements OnInit {
  currentUser: AvioAdmin;
  LetSelectForm: FormGroup;
  ocenaLeta: number;
  Letovi = new Array<Let>();

  constructor(private location: Location,public fb: FormBuilder) {
    this.LetSelectForm = this.fb.group({
      selectedLet:['']
    });

    this.currentUser = AppComponent.currentUser as AvioAdmin;

    //
    this.Letovi.push(new Let(0, this.currentUser.avioKompanija, 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Bec', new Avion(10000, 20, 5000, 30, 1000, 50)));
    this.Letovi.push(new Let(1, this.currentUser.avioKompanija, 0, 5000, 10000, new Date(2020, 1, 2), new Date(2020, 1, 2), 'Beograd', 'Prag', new Avion(10000, 20, 5000, 30, 1000, 50)));
   }

  ngOnInit(): void {
  }

  GetOcena(){
    //return this.currentUser.avioKompanija.ProsecnaOcena();
    return 0;
  }

  GetLetoviId(){
    //let Letovi = this.currentUser.avioKompanija.letovi;
    
    let ids = new Array<number>();
    this.Letovi.forEach(element =>{
      ids.push(element.ID);
    });
    return ids;
  }

  GetLetoviById(id): Let{
    //let letovi = this.currentUser.avioKompanija.letovi;
    let ret = null;
    this.Letovi.forEach(element =>{
      if(element.ID == id)
      {
        ret = element;
      }
    });
    return ret;
  }

  LetChanged(e){
    this.ocenaLeta = this.GetLetoviById(this.LetSelectForm.get('selectedLet').value).ProsecnaOcena();
  }

  onBack(){
    this.location.back();
  }

}
