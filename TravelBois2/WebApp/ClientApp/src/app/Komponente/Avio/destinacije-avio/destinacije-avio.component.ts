import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DestinacijeService } from '../../../shared/destinacije.service';
import { Aerodrom } from '../../../entities/objects/aerodrom';
import { element } from 'protractor';

@Component({
  selector: 'app-destinacije-avio',
  templateUrl: './destinacije-avio.component.html',
  styleUrls: ['./destinacije-avio.component.css']

})
export class DestinacijeAvioComponent implements OnInit {
  destinacijePodaciForm: FormGroup;
  public empty = 0;
  listaAerodroma: Array<Aerodrom>;
  letData: Array<Array<string>>; 
  gradovi: Array<string>;
  drzave: Array<string>;
  grad: string;
  drzava: string;
  aerodrom: Aerodrom;

  constructor(private location: Location, private service: DestinacijeService) {
    this.letData = new Array<Array<string>>();
    this.listaAerodroma = new Array <Aerodrom>();

  }

  ngOnInit(): void {
    this.initForm();
    this.getDestinacije();
    //this.loadAerodromi();
    //this.ispis();
    
  }

  //ispis() {
  //  console.log('ispis duzine ' + this.listaAerodroma.length);
  //  this.listaAerodroma.forEach(element => {
  //    console.log('ispis: ' + element.drzava + ' ' + element.grad);
  //  })
  //}


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

  //loadAerodromi() {

  //  this.letData.forEach(element => {
  //    let g = element[0];
  //    let d = element[1];
  //    let a = new Aerodrom(g,d);
  //    this.listaAerodroma.push(a);
  //  });
  //}

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
    console.log('ispis: ' + data);
  }

  onBack(){
    this.location.back();
  }

}
