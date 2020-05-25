import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { NoSpecialChars, NoSpace, ValidateNumber, ValidatePassword, NoFullstop } from 'src/app/Helpers/custom-validators/custom-validators';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private location: Location, public service: UserService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    
  }

  onBack()
  {
    this.location.back();
  }

}
