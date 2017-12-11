import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IUser} from "../user";
import {UserService} from "../user.service";
import {UserEditComponent} from "../edit/useredit.component";


@Component({
  selector: 'app-user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class DetailComponent implements OnInit {

  errorMessage:string;
  user:IUser;

  constructor(private _route:ActivatedRoute,
              private _router:Router,
              private _userService:UserService,
              private modalService:NgbModal) {
    this.user = {id: null, username: '', useremail: null, password: null, role: null};
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.findOne(id);
  }

  findOne(id:number) {
    this._userService.findOne(id).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error
    );
  }

  edit() {
    const modalRef = this.modalService.open(UserEditComponent);
    modalRef.componentInstance.title = "Edit";
    modalRef.componentInstance.id = this.user.id;
  }


  deleteBook() {
    this._userService.delete(this.user.id);
  }

  onBack():void {
    this._router.navigate(['/users']);
  }

}
