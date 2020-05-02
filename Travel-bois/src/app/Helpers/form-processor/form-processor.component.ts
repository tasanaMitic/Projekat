import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-processor',
  templateUrl: './form-processor.component.html',
  styleUrls: ['./form-processor.component.css']
})
export class FormProcessorComponent implements OnInit {

  @Input() name: string; 
  from = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
