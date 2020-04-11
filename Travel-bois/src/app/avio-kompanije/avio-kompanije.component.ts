import { Component, OnInit } from '@angular/core';
import { AvioKompanija } from '../entities/objects/avio-kompanija';

@Component({
  selector: 'app-avio-kompanije',
  templateUrl: './avio-kompanije.component.html',
  styleUrls: ['./avio-kompanije.component.css']
})
export class AvioKompanijeComponent implements OnInit {
  kompanije: Array<AvioKompanija>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
