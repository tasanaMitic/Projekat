import { Component, OnInit } from '@angular/core';
import { User } from '../entities/users/user/user';
import { AppComponent } from '../app.component';
import { RegisteredUser } from '../entities/users/registered-user/registered-user';
import { TipVozila } from '../_enums';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {
  currentUser: RegisteredUser;

  letHeaders = ['Avio kompanija', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Prosecna ocena', ''];
  letData : Array<Array<string>>;

  kolaHeaders = ['Rent-A-Car', 'Marka', 'Model', 'Godiste', 'Broj mesta', 'Tip', 'Prosecna ocena'];
  kolaData: Array<Array<string>>;


  constructor() { 
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.letData = new Array<Array<string>>();
    this.kolaData = new Array<Array<string>>();
    
    this.currentUser.IstorijaLetova.forEach(element => {
      let temp = new Array<string>();
      temp.push(element.avioKompanija.naziv);
      temp.push(element.mestoPolaska)
      temp.push(element.mestoDolaska)
      temp.push(element.DatumPolaska)
      temp.push(element.DatumDolaska)
      temp.push(element.ProsecnaOcena().toString())
      this.letData.push(temp)
    });

    this.currentUser.IstorijaKola.forEach(element => {
      let temp = new Array<string>();
      temp.push(element.renta);
      temp.push(element.GetMarka())
      temp.push(element.GetModel())
      temp.push(element.Godiste.toString())
      temp.push(element.BrojMesta.toString())
      temp.push(TipVozila[element.Tip])
      temp.push(element.ProsecnaOcena().toString())
      this.kolaData.push(temp)
    });
  }

  ngOnInit(): void {
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    //console.debug(this.currentUser.Username)
    //console.debug(this.currentUser.IstorijaLetova[0].avioKompanija.naziv)
  }

  OceniLet(){}
  OceniKola(){}
}
