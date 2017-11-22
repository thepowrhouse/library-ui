import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";

@Component({
    selector: 'booksearch-root',
    templateUrl: './booksearch.component.html'
}
)
export class BookSearchComponent{
    books: Book[] = [
        new Book('1','Pirates of caribean','The great book on pirates of caribean','1234','Jack','Newyork','Long live Pirates','2010','US','3','Available')
    ];

    constructor(private http: HttpClient){
        
          }

    searchBooks(){
        this.books.push(new Book('1','Pirates of caribean','The great book on pirates of caribean','1234','Jack','Newyork','Long live Pirates','2010','US','3','Available'));
        this.http.get('https://api.github.com/users/seeschweiler').subscribe(res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          });
    }


}