import { Component, OnInit } from '@angular/core';
import { Let } from '../entities/objects/let';
import {Location} from '@angular/common'
import { Avion } from '../entities/objects/avion';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {
  sviLetovi: Array<Let>;
  filtriraniLetovi: Array<Let>;
  constructor(private location: Location) { }

  ngOnInit(): void {
    //this.sviLetovi.push(new Let(2,3,4,5,6,'bg', 'ns', new Avion()));
  }

  onBack(){
    this.location.back();
  }

  filterLet()  {}
  filterReset(){}

  


}
