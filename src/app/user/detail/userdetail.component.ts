import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IUser} from '@app/user/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@app/user/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsereditComponent} from '@app/user/edit/useredit.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserdetailComponent implements OnInit {
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
    let self = this;
    const modalRef = this.modalService.open(UsereditComponent);
    modalRef.componentInstance.title = "Edit";
    modalRef.componentInstance.id = this.user.id;
    modalRef.result.then((result) => {
      self.user = result;
    }, (reason) => {
      //error case
    });
  }


  deleteBook() {
    this._userService.delete(this.user.id).subscribe(
      user=>this._router.navigate(['/users']),
      error=>this._router.navigate(['/users'])
    );

  }

  onBack():void {
    this._router.navigate(['/users']);
  }
}
