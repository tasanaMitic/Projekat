import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg-renta-kompaniju',
  templateUrl: './reg-renta-kompaniju.component.html',
  styleUrls: ['./reg-renta-kompaniju.component.css']
})
export class RegRentaKompanijuComponent implements OnInit {
  regRentaForm: FormGroup;
  constructor(private location: Location, public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.regRentaForm = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'opis': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.regRentaForm.value);
    console.log(this.regRentaForm);
  }

  onBack()
  {
    this.location.back();
  }

}
