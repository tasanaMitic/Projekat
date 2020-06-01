import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-ocenjivanje',
  templateUrl: './ocenjivanje.component.html',
  styleUrls: ['./ocenjivanje.component.css']
})
export class OcenjivanjeComponent implements OnInit {
  kompanija: string;
  rating = 0;
  ocena: number;
  empty:number;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.empty = 0;
  }

  ngOnInit(): void {
    this.kompanija = this.route.snapshot.paramMap.get("naziv");
    console.log(this.empty)
  }
  onRateChange(rating: number) {
    this.ocena = rating;
    this.empty = 1;
  }

  onBack() {
    this.location.back();
  }

}
