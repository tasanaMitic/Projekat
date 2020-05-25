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
    this.service.formModel.reset();
  }


  onSubmit(){
    this.service.register().subscribe(
      (res: any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
        }
        else{
          res.errors.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                //username taken
                break;
              default:
                //registration failed
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  onBack()
  {
    this.location.back();
  }

}
