import { Component, OnInit } from '@angular/core';
import { Let } from '../entities/objects/let';
import {Location} from '@angular/common'

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
  }

  onBack(){
    this.location.back();
  }

  filterLet()  {}
  filterReset(){}

  


}
