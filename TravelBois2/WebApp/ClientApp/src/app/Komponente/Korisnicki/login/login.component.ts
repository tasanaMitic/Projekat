import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../../app.component';
import { RegisteredUser } from '../../../entities/users/registered-user/registered-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }

  userDetails;

  constructor(private location: Location, private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/pocetna');
    }
  }


  onBack()
  {
    this.location.back();
    
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success("Uspesno ste se ulogovali!", "Logovanje uspesno.");
        this.router.navigate(['/pocetna'])
      },
      (err) =>{
        if (err.status == 400) {
          this.toastr.error("Username ili password nisu ispravni!", "Logovanje neuspesno.");
        }
        else {
          console.log(err);
        }
      }
    )
  }
}
