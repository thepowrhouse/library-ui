import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IUser} from "./user";
import {environment} from "../../environments/environment";
import {AuthService} from "@fsd-shared/services/auth.service";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  private _userUrl = environment.book_service_url + "/users";

  constructor(private _http:HttpClient, private _auth:AuthService) {
  }

  findAll():Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userUrl, {headers: this.getAuthHeaders()});
  }

  findOne(id:number):Observable<IUser> {
    return this._http.get<IUser>(this._userUrl + "/" + id, {headers: this.getAuthHeaders()});
  }

  save(user:IUser) {

    if (user.id) {
      return this._http.put<IUser>(this._userUrl + "/" + user.id, user, {headers: this.getAuthHeaders()});
    } else {
      return this._http.post<IUser>(this._userUrl + "/", user, {headers: this.getAuthHeaders()});
    }
  }

  delete(id:number) {
    return this._http.delete<IUser>(this._userUrl + "/" + id, {headers: this.getAuthHeaders()});
  }

  private handleError(err:HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  private getAuthHeaders() {
    let token = this._auth && this._auth.currentToken && this._auth.currentToken.access_token;
    let headers = new HttpHeaders();
    return headers.set('Authorization', `Bearer ${token}`);
  }
}
