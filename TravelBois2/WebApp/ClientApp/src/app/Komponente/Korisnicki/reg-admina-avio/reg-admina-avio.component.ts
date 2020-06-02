import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location} from '@angular/common';
import { AvioAdminService } from 'src/app/shared/avio-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-admina-avio',
  templateUrl: './reg-admina-avio.component.html',
  styleUrls: ['./reg-admina-avio.component.css']
})
export class RegAdminaAvioComponent implements OnInit {
  regAvioAdminForm: FormGroup;
  constructor(private location: Location, public service: AvioAdminService, private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
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
