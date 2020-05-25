import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Location} from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

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

  constructor(private location: Location, private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  onBack()
  {
    this.location.back();
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/pocetna'])
      },
      (err) =>{
        if(err.status == 400){
          //Bad username or passowrd
        }
      }
    )
  }
}
