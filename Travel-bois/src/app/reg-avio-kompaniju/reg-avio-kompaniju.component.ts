import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';

@Component({
  selector: 'app-reg-avio-kompaniju',
  templateUrl: './reg-avio-kompaniju.component.html',
  styleUrls: ['./reg-avio-kompaniju.component.css']
})
export class RegAvioKompanijuComponent implements OnInit {
  regAvioForm: FormGroup;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.regAvioForm = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'adresa': new FormControl('', Validators.required),
      'opis': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.regAvioForm.value);
    console.log(this.regAvioForm);
  }

  onBack()
  {
    this.location.back();
  }

}
