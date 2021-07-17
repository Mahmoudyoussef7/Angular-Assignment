import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private users:UsersService) { }

  usersArr:any=[];
  errMsg="";

  ngOnInit(): void {
    this.users.getUsers().subscribe((userData)=>
    { 
      this.usersArr = userData;
    },errData=>{
      this.errMsg = errData;
    })
  }

}
