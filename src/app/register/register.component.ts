import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes and types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialSites=["Facebook","Google","Twitter"];
  
  constructor() { }

  userModel = new User("","","","","");

  ngOnInit(): void {
  }

}
