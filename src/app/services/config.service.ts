import { Injectable } from '@angular/core';
import {IDeviceConfig} from "@fsd-shared/shared.interface";
import {environment} from "../../environments/environment";

@Injectable()
export class ConfigService {

  private _edgeServerHost: string;
  private _authenticationServiceHost: string;
  private _authenticationClientId: string;
  private _authenticationClientSecret: string;

  public loadConfig(config: IDeviceConfig) {
    console.log('Loading config:', config);

    this._edgeServerHost = config.receivingConfig.serviceUrl;
    this._authenticationServiceHost = config.authenticationConfig.serviceUrl;
    this._authenticationClientId = config.authenticationConfig.clientid;
    this._authenticationClientSecret = config.authenticationConfig.secretcode;
  }

  public set edgeServerHost(value: string) {
    this._edgeServerHost = value;
  }

  public get authenticationServiceHost() {
    return this._authenticationServiceHost || environment.authenticationServiceHost;
  }

  public set authenticationServiceHost(value: string) {
    this._authenticationServiceHost = value;
  }

  public get authenticationClientId() {
    return this._authenticationClientId || environment.authenticationClientId
  }

  public set authenticationClientId(value: string) {
    this._authenticationClientId = value;
  }

  public get authenticationClientSecret() {
    return this._authenticationClientSecret || environment.authenticationClientSecret;
  }

  public set authenticationClientSecret(value: string) {
    this._authenticationClientSecret = value;
  }

}
