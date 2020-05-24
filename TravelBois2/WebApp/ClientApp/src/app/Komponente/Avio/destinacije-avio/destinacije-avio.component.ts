import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-destinacije-avio',
  templateUrl: './destinacije-avio.component.html',
  styleUrls: ['./destinacije-avio.component.css']
  
})
export class DestinacijeAvioComponent implements OnInit {
  public empty = 0;
  lokacije: Array<string>;

  constructor(private location: Location) { 
    //let lokacije = new Array('Pariz');
  }

  ngOnInit(): void {
    
  }

  onBack(){
    this.location.back();
  }

}
