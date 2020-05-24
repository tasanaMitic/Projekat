import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { AppComponent } from '../../../app.component';
import { TipVozila } from '../../../_enums';

@Component({
  selector: 'app-brze-rezervacije',
  templateUrl: './brze-rezervacije.component.html',
  styleUrls: ['./brze-rezervacije.component.css']
})
export class BrzeRezervacijeComponent implements OnInit {
  currentUser : RegisteredUser;
  letHeaders = ['Avio kompanija', 'Mesto polaska', 'Mesto dolaska', 'Datum polaska', 'Datum dolaska', 'Klasa', 'Cena', 'Prosecna ocena', ''];
  letData : Array<Array<string>>;

  kolaHeaders = ['Rent-A-Car', 'Marka', 'Model', 'Godiste', 'Broj mesta', 'Tip', 'Cena po danu', 'Prosecna ocena'];
  kolaData: Array<Array<string>>;


  constructor() { 
    this.currentUser = AppComponent.currentUser as RegisteredUser;
    this.letData = new Array<Array<string>>();
    this.kolaData = new Array<Array<string>>();
    
    AppComponent.avioKompanije.forEach(element => {
      element.letovi.forEach(element => {
        let temp = new Array<string>();
        temp.push(element.avioKompanija.naziv);
        temp.push(element.mestoPolaska)
        temp.push(element.mestoDolaska)
        temp.push(element.DatumPolaska)
        temp.push(element.DatumDolaska)
        temp.push('Business')
        temp.push('5000')
        temp.push(element.ProsecnaOcena().toString())
        this.letData.push(temp)
      });
    });

    AppComponent.rente.forEach(element => {
      element.Filijale.forEach(element => {
        element.ListaKola.forEach(element => {
          let temp = new Array<string>();
          temp.push(element.renta);
          temp.push(element.GetMarka())
          temp.push(element.GetModel())
          temp.push(element.Godiste.toString())
          temp.push(element.BrojMesta.toString())
          temp.push(TipVozila[element.Tip])
          temp.push('1500')
          temp.push(element.ProsecnaOcena().toString())
          this.kolaData.push(temp)
        });
      });
    });
  }
  ngOnInit(): void {
  }

  RezervisiLet(){}
  RezervisiKola(){}
}
