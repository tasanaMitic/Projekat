import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-oceni-let',
  templateUrl: './oceni-let.component.html',
  styleUrls: ['./oceni-let.component.css']
})
export class OceniLetComponent implements OnInit {
  relacija: string;
  rating = 0;
  ocena: number;
  empty: number;
  id: number;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.empty = 0;
  }

  ngOnInit(): void {
    this.relacija = this.route.snapshot.paramMap.get("relacija");
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
  }

  onRateChange(rating: number) {
    this.ocena = rating;
    this.empty = 1;
    console.log(this.id);

    //slanje ocene servisu
  }

  onBack() {
    this.location.back();
  }

}
