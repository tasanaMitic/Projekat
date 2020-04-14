import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { User } from '../entities/users/user/user';

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.css']
})
export class PrijateljiComponent implements OnInit {
  
  prijatelji: Array<User>;
  constructor(private location :Location) { }

  ngOnInit(): void {
  }

  onBack()
  {
    this.location.back();
  }

  onFriend(){}

}
