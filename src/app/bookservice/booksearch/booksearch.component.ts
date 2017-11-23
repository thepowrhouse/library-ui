import { Component, Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { HttpHeaders } from "@angular/common/http/src/headers";
import { BookService } from "../bookservice";

@Component({
    selector: 'booksearch-root',
    templateUrl: './booksearch.component.html'
}
)
export class BookSearchComponent implements OnInit{
    
    books: Book[];
    actionSelected: String;

    constructor(private http: HttpClient, private bookService:BookService){
        
    }

    ngOnInit(){
        this.bookService.getBooks().then(books => this.books = books);
    }

      viewBooks(){
          this.actionSelected = "viewBooks";
      }

      requestBooks(){
        this.actionSelected = "requestBooks";
    }


}