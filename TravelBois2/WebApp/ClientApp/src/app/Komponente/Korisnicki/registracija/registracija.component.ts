import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private location: Location, public service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }


  onSubmit() {
    console.debug('onSubmit()')
    this.service.register().subscribe(
      (res: any) => {
        console.debug('usao u register')
        if (res.succeeded) {
          console.debug('uspeo')
          this.service.formModel.reset();
          this.router.navigate(['/pocetna'])
        }
        else {
          console.debug('nije uspeo')
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
