import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { OcenaService } from '../../../shared/ocena.service';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';
import { AppComponent } from '../../../app.component';
import { Ocena } from '../../../entities/misc/ocena';
import { AvioAdminService } from '../../../shared/avio-admin.service';
import { element } from 'protractor';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';

@Component({
  selector: 'app-ocenjivanje',
  templateUrl: './ocenjivanje.component.html',
  styleUrls: ['./ocenjivanje.component.css']
})
export class OcenjivanjeComponent implements OnInit {
  kompanija: string;
  value: number;
  rating = 0;
  empty = 0;
  currentUser: RegisteredUser;
  ocena: Ocena;
  aviokompanija: AvioKompanija;

  constructor(private route: ActivatedRoute, private location: Location, private service: OcenaService, private serviceA: AvioAdminService) {
    this.currentUser = AppComponent.currentUser;
  }

  ngOnInit(): void {
    this.kompanija = this.route.snapshot.paramMap.get("naziv");
    this.service.getOceneAvio().subscribe(ocene => {
      ocene.forEach(element => {
        if (element.userID == this.currentUser.Username && element.kompanija == this.kompanija) {
          this.empty = 1;
        }
      })
    });
  }
  onRateChange(rating: number) {
    this.value = rating;
    this.empty = 1;

    this.ocena = new Ocena(this.value, this.currentUser.Username, this.kompanija);
    this.service.oceniAviokompaniju(this.ocena).subscribe();
    
  }

  onBack() {
    this.location.back();
  }

}
