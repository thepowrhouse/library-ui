import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IBook} from "./book";
import {environment} from "../../environments/environment";
import {AuthService} from "@fsd-shared/services/auth.service";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class BookService {
  private _bookUrl = environment.book_service_url + "/books";

  constructor(private _http:HttpClient, private _auth:AuthService) {
  }

  findAll():Observable<IBook[]> {
    return this._http.get<IBook[]>(this._bookUrl, {headers: this.getAuthHeaders()});
  }

  findOne(id:number):Observable<IBook> {
    return this._http.get<IBook>(this._bookUrl + "/" + id, {headers: this.getAuthHeaders()});
  }

  saveOrUpdate(book:IBook) {
    if (book.id) {
      return this._http.put<IBook>(this._bookUrl + "/" + book.id, book, {headers: this.getAuthHeaders()});
    } else {
      book.isbn = "";
      book.year_of_publication = "2007";
      book.publisher = "";
      book.status = "";
      book.author = "";
      return this._http.post<IBook>(this._bookUrl + "/", book, {headers: this.getAuthHeaders()});
    }

  }

  delete(id:number) {
    return this._http.delete<IBook>(this._bookUrl + "/" + id, {headers: this.getAuthHeaders()});
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
