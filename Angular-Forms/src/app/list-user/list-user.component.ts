import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userslist: Array<any> = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.listUser();
  }

  listUser() {
    this.userService.listUser().subscribe(
      data => {
        console.log("Users list");
        console.log(data);
        this.userslist = data;
      },
      error => {
        console.log(error);
        this.userslist = [];
      }
    )
  }

  backToTemplate(){
    this.router.navigate(['./template']);
  }

}
