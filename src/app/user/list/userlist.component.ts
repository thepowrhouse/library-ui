import { Component, OnInit } from '@angular/core';
import {IUser} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class ListComponent implements OnInit {
  errorMessage: string;
  filteredUsers: any;
  users: IUser[] = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this._userService.findAll()
      .subscribe(
        users => {
          this.users = users;
          this.filteredUsers = this.users;
        },
        error => this.errorMessage = <any>error
      );
  }

}
