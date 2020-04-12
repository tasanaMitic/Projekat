import { Component, OnInit } from '@angular/core';
import { Let } from '../entities/objects/let';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {
  sviLetovi: Array<Let>;
  filtriraniLetovi: Array<Let>;
  constructor() { }

  ngOnInit(): void {
  }

  filterLet()  {}
  filterReset(){}


}
