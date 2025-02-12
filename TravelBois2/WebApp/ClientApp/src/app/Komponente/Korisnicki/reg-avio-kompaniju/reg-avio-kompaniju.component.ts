import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LetoviService } from '../../../shared/letovi.service';
import { AvioAdminService } from '../../../shared/avio-admin.service';
import { AvioKompanija } from '../../../entities/objects/avio-kompanija';

@Component({
  selector: 'app-reg-avio-kompaniju',
  templateUrl: './reg-avio-kompaniju.component.html',
  styleUrls: ['./reg-avio-kompaniju.component.css']
})
export class RegAvioKompanijuComponent implements OnInit {
  avioAdminFormModel: FormGroup;
  naziv: string;
  grad: string;
  adresa: string;
  opis: string;
  avioKompanija: AvioKompanija;
  constructor(private location: Location, public service: AvioAdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.avioAdminFormModel = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'grad': new FormControl('', Validators.required),
      'adresa': new FormControl('', Validators.required),
      'opis': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.naziv = this.avioAdminFormModel.get('naziv').value;
    this.grad = this.avioAdminFormModel.get('grad').value;
    this.adresa = this.avioAdminFormModel.get('adresa').value;
    this.opis = this.avioAdminFormModel.get('opis').value;

    this.avioKompanija = new AvioKompanija(this.naziv, this.adresa, this.grad, this.opis);
    this.service.addAvioKompanija(this.avioKompanija).subscribe();
  }

  onBack()
  {
    this.location.back();
  }

}
