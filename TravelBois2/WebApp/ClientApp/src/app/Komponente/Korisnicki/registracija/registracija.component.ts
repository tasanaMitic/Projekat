import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private location: Location, public service: UserService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.service.formModel.reset();
  }


  onSubmit() {
    console.log('onSubmit()')
    this.service.register().subscribe(
      (res: any) => {
        console.log('usao u register')
        if (res.succeeded) {
          console.log('uspeo')
          this.service.formModel.reset();
          this.toastr.success('Novi korisnik kreiran!', 'Registracija uspesna.');
          this.router.navigate(['/pocetna'])
        }
        else {
          console.log('nije uspeo')
          res.errors.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                this.toastr.error('Vec postoji korisnik sa tim imenom!', 'Registracija neuspesna.');
                break;
              default:
                this.toastr.error(element.description, 'Registracija neuspesna.');
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
