import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil-avio',
  templateUrl: './profil-avio.component.html',
  styleUrls: ['./profil-avio.component.css']
})
export class ProfilAvioComponent implements OnInit {
  avioPodaciForm: FormGroup;

  constructor(private location: Location, private router: Router) { 
  }

  ngOnInit(): void {
    
    this.initForm();
  }

  initForm(){
    this.avioPodaciForm = new FormGroup({
      'naziv' : new FormControl('', Validators.required),
      'grad' : new FormControl('', Validators.required),
      'adresa' : new FormControl('', Validators.required),
      'opis' : new FormControl('', Validators.required),

    });
  }

  onSubmit(){
    console.log(this.avioPodaciForm.value);
    console.log(this.avioPodaciForm);
  }

  Map() {
    window.open('https://localhost:44343/maps', "_self");
  }

  onBack()
  {
    this.router.navigateByUrl('/pocetna');
  }

}
