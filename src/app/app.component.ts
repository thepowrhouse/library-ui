import {Component, NgZone, OnInit} from '@angular/core';
import { Subject } from "rxjs/Subject";
import { AuthService } from "@fsd-shared/services/auth.service";
import { NetworkService } from "@fsd-shared/services/network.service";
import {environment} from "../environments/environment";
import {ConfigService} from "@app/services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library Management';

  private _tokenStream = new Subject();
  private _tokenSource$ = this._tokenStream.asObservable();

  constructor(
    private _auth: AuthService,
    private _config: ConfigService,
    private _network: NetworkService,
    private _zone: NgZone
  ){}

  ngOnInit() {
    console.log('current token '+ this._auth.currentToken);
    this.initializeAuth();
  }

  private initializeAuth() {
    this._auth.init({
      hostURL: this._config.authenticationServiceHost,
      clientId: this._config.authenticationClientId,
      clientSecret: this._config.authenticationClientSecret
    });

    this._auth.authenticate(environment.userName, environment.password, function (err) {
      if (err) {
        console.log(err);
        return;
      }
    });
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
}
