import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/users/user/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
