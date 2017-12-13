import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {IUser} from '@app/user/user';
import {UserService} from '@app/user/user.service';
import {HttpClient} from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsereditComponent implements OnInit {
  @Input()
  id:number;
  user:IUser;
  avatar:any;

  constructor(private _userService:UserService,
              private _http:HttpClient,
              public activeModal:NgbActiveModal,
              private  _router:Router) {
    this.user = {id: null, username: '', useremail: null, password: null, role: null};
  }

  ngOnInit() {
    if (this.id) {
      this._userService.findOne(this.id).subscribe(user => this.user = user);
    }
  }

  save() {
    this._userService.save(this.user).subscribe(
      (user:IUser)=> {
        console.log(user);
        this.activeModal.close(user);
        this._router.navigate(["/users/" + user.id]);
      },
      error=> {
        console.error(error);
      }
    );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.avatar = event.target.files[0];
    }
  }
}
