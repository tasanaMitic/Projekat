import { Component, OnInit, Input } from '@angular/core';
import { Kola } from '../entities/objects/kola';
import { Datum } from '../entities/misc/datum';

@Component({
  selector: 'kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {
  @Input() kola: Kola;

  datum: Datum;

  constructor() { 
    this.datum = new Datum();
  }

  ngOnInit(): void {
    this.datum = new Datum(this.datum)
  }

  IsCarAvalable(day, month, year){
    let date = new Date(year, month, day);
    let ret = true;
    this.kola.Zauzetost.forEach(element => {
      if(date >= element[0])
        if(date <= element[1])
          ret = false;
    });
    return ret;
  }
  UmanjiMesec(){
    this.datum.UmanjiMesec();
    this.ngOnInit();
  }
  UvecajMesec(){
    this.datum.UvecajMesec();
    this.ngOnInit();
  }

}
