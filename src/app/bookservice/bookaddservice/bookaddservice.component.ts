import { Component, ElementRef, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";
import { BookService } from "../bookservice";

@Component({
    selector: 'bookaddservice-root',
    templateUrl: './bookaddservice.component.html'
}
)
export class BookAddServiceComponent{
    @ViewChild('bookIDInput') bookIDInputRef: ElementRef;
    @ViewChild('bookName') bookNameRef: ElementRef;
    @ViewChild('bookDescription') bookDescriptionRef: ElementRef;
    @ViewChild('bookISBN') bookISBNRef: ElementRef;
    @ViewChild('bookAuthor') bookAuthorRef: ElementRef;
    @ViewChild('bookTitle') bookTitleRef: ElementRef;
    @ViewChild('bookPublisher') bookPublisherRef: ElementRef;
    @ViewChild('bookPublication') bookPublicationRef: ElementRef;
    @ViewChild('bookLocation') bookLocationRef: ElementRef;
    @ViewChild('bookCopies') bookCopiesRef: ElementRef;
    @ViewChild('bookStatus') bookStatusRef: ElementRef;

        constructor(private http: HttpClient,private bookService:BookService){
            
        }
        addBooks(){
            const bookId = this.bookIDInputRef.nativeElement.value;
            const bookName = this.bookNameRef.nativeElement.value;
            const bookDecription = this.bookDescriptionRef.nativeElement.value;
            const bookISBN = this.bookISBNRef.nativeElement.value;
            const bookAuthor = this.bookAuthorRef.nativeElement.value;
            const bookTitle = this.bookTitleRef.nativeElement.value;
            const bookPublisher = this.bookPublisherRef.nativeElement.value;
            const bookPublication = this.bookPublicationRef.nativeElement.value;
            const bookCopies = this.bookCopiesRef.nativeElement.value;
            const bookStatus = this.bookStatusRef.nativeElement.value;
            const bookLocation = this.bookLocationRef.nativeElement.value;
            
            this.bookService.addBook(new Book(bookId, bookName, bookDecription, bookISBN, bookAuthor, 
            bookPublisher,bookTitle, bookPublication,bookLocation, bookCopies, bookStatus));
        }

}