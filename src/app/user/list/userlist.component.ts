import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '@app/user/user.service';
import { IUser } from '@app/user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserlistComponent implements OnInit {
  errorMessage: string;
  filteredUsers: any;
  users: IUser[] = [];

  constructor(private _userService: UserService) { }

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
