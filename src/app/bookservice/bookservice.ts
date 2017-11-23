import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { Book } from "./bookservice.model";
import { BookSearchComponent } from './booksearch/booksearch.component';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService{
    books: Book[];
    constructor(private http: HttpClient){
        }
    getBooks(): Promise<Book[]> {
          return this.http.get("http://localhost:8181/api/books/")
          .toPromise()
          .then(response => response as Book[])
          .catch(this.handleError);
    }
          
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    addBook(book:Book):void{
        const req = this.http.post('http://localhost:8181/api/books/addBook', {
            title: 'Add Book',
            body: book
          })
            .subscribe(
              res => {
                console.log(res);
              },
              err => {
                console.log("Error occured");
              }
            );
    }
}