/// <reference path="../../../shared/destinacije.service.ts" />
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DestinacijeService } from '../../../shared/destinacije.service';
import { Aerodrom } from '../../../entities/objects/aerodrom';
import { element } from 'protractor';
import { strict } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinacije-avio',
  templateUrl: './destinacije-avio.component.html',
  styleUrls: ['./destinacije-avio.component.css']

})
export class DestinacijeAvioComponent implements OnInit {
  letHeaders = ['Grad', 'Drzava'];
  destinacijePodaciForm: FormGroup;
  public empty = 0;
  listaAerodroma: Array<Aerodrom>;
  letData: Array<Array<string>>;
  grad: string;
  drzava: string;
  aerodrom: Aerodrom;
  g: string;
  d: string;

  constructor(private location: Location, private service: DestinacijeService, private router: Router) {
    this.letData = new Array<Array<string>>();
    this.listaAerodroma = new Array <Aerodrom>();

  }

  ngOnInit(): void {
    this.initForm();
    this.getDestinacije();
    
  }


  initForm() {
    this.destinacijePodaciForm = new FormGroup({
      'grad': new FormControl('', Validators.required),
      'drzava': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.grad = this.destinacijePodaciForm.get('grad').value;
    this.drzava = this.destinacijePodaciForm.get('drzava').value;
    this.aerodrom = new Aerodrom(this.grad, this.drzava);
    this.service.addDestinacija(this.aerodrom).subscribe();
    
    window.location.reload();
  }

  

  getDestinacije(): void{
    this.service.getAerodromi().subscribe(aerodromi =>
      aerodromi.forEach(element => {
        let temp = new Array<string>();
          this.empty = 1;
          temp.push(element.grad);
          temp.push(element.drzava);
        this.letData.push(temp);
      })
    );    
  }

  ukloniGrad(data: string) {
    this.service.deleteAerodrom(data).subscribe();
    window.location.reload();
  }

  onBack(){
    this.router.navigateByUrl('/pocetna');
  }

}
