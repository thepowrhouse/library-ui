import {Component, OnInit, Input, ElementRef, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../user";
import {environment} from "../../../environments/environment";
import {UserService} from "../user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-edit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  id:number;
  user:IUser;
  avatar:any;
  
  ngOnInit() {
    if (this.id) {
      
      this._userService.findOne(this.id).subscribe(user => this.user = user);
    }
  }

  constructor(private _userService:UserService, private _http:HttpClient, public activeModal:NgbActiveModal) {
    this.user = {id: null, username: '', useremail: null, password: null, role: null};
  }

  save() {
    this._userService.save(this.user).subscribe(
      (user:IUser)=> {
        console.log(user);
        this.activeModal.dismiss();
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
