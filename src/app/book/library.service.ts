import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IBook} from "./book";
import {environment} from "../../environments/environment";
import {AuthService} from "@fsd-shared/services/auth.service";
import {IIssueRequest} from "./issue.request";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class LibraryService {
  private _bookUrl = environment.book_service_url;

  constructor(private _http:HttpClient, private _auth:AuthService) {
  }

  issueBook(id, userId) {
    let request:IIssueRequest = {bookId: id, userId: userId};

    return this._http.post<IBook[]>(this._bookUrl + '/issueBook', request, {headers: this.getAuthHeaders()});
  }

  releaseBook(id, userId) {
    let request:IIssueRequest = {bookId: id, userId: userId};
    return this._http.post<IBook[]>(this._bookUrl + '/releaseBook', request, {headers: this.getAuthHeaders()});
  }

  private getAuthHeaders() {
    let token = this._auth && this._auth.currentToken && this._auth.currentToken.access_token;
    let headers = new HttpHeaders();
    return headers.set('Authorization', `Bearer ${token}`);
  }
}
