import {Component, NgZone, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {AuthService} from "@fsd-shared/services/auth.service";
import {NetworkService} from "@fsd-shared/services/network.service";
import {environment} from "../environments/environment";
import {ConfigService} from "@app/services/config.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "./shared-components/login/login.component";
import {IHeaderItem} from "./shared-components/header/header-item";
import {EditComponent} from "./book/edit/edit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _tokenStream = new Subject();
  private _tokenSource$ = this._tokenStream.asObservable();

  constructor(private _auth:AuthService,
              private _config:ConfigService,
              private _network:NetworkService,
              private _zone:NgZone,
              private modalService:NgbModal) {
  }

  ngOnInit() {
    console.log('current token ' + this._auth.currentToken);
    this.initializeAuth();
  }

  private initializeAuth() {
    this._auth.init({
      hostURL: this._config.authenticationServiceHost,
      clientId: this._config.authenticationClientId,
      clientSecret: this._config.authenticationClientSecret
    });

   /*if (!this._auth.currentToken || this._auth.expired) {
      this.items.filter(i=>i.title == 'Logout')[0].display = false;
      this.login('');
    }*/

  }

  public closeApp() {
    if (navigator['app']) {
      navigator['app'].exitApp();
    } else if (navigator['device']) {
      navigator['device'].exitApp();
    } else {
      window.close();
    }
  }

  public handleContext() {
    return !environment.production;
  }

  items:Array<IHeaderItem> = [
    {
      title: 'Home',
      link: '/',
      type: 'Link',
      action: undefined,
      display: true
    },
    {
      title: 'Books',
      link: '/books',
      type: 'Link',
      action: undefined,
      display: true
    },
    {
      title: 'Search',
      link: undefined,
      type: 'Search',
      action: function (form) {
        console.log('Search...', form.value);
      },
      display: true
    },
    {
      title: 'Add',
      link: undefined,
      type: 'Button',
      action: this.add.bind(this),
      display: true
    },
    {
      title: 'Login',
      link: undefined,
      type: 'Button',
      action: this.login.bind(this),
      display: true
    },

    {
      title: 'Logout',
      link: undefined,
      type: 'Button',
      action: this.login.bind(this),
      display: true
    },

    {
      title: undefined,
      link: undefined,
      type: 'UserName',
      action: undefined,
      display: true
    }
  ];


  login(err:string) {
    let self = this;
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.errorMessage=err;
    modalRef.result
      .then((result) => {
          if (result && result.action == 'Login') {
            this._auth.authenticate(result.userName, result.password, function (err) {
              if (err || !self._auth.userName) {
                console.log(err);
                self.login("Login failed");
              }
              self.items.filter(i=>i.title == 'Logout')[0].display = true;
              self.items.filter(i=>i.title == 'Login')[0].display = false;
              self.items.filter(i=>i.type == 'UserName')[0].title = self._auth.userName;
            });
          }
        },
        (reason) => {

        });
  }

  logout() {
    this._auth.invalidateToken();
    this.login('');
  }

  add() {
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.title = "Add";
  }
}
