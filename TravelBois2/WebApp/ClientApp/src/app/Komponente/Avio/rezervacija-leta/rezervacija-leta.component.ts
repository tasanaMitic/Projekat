import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rezervacija-leta',
  templateUrl: './rezervacija-leta.component.html',
  styleUrls: ['./rezervacija-leta.component.css']
})
export class RezervacijaLetaComponent implements OnInit {
  idLeta: number;
  aviokompanija: string;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.idLeta = parseInt(this.route.snapshot.paramMap.get("id"));
    this.aviokompanija = this.route.snapshot.paramMap.get("naziv");
    console.log(this.idLeta.toString() + ' ' + this.aviokompanija);
  }

}
