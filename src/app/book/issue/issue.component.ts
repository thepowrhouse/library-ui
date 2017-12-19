import {Component, OnInit, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IBook} from "../book";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {LibraryService} from "../library.service";
import {BookService} from "../book.service";


@Component({
  selector: 'app-book-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @Input()
  id:number;
  errorMessage:string;
  book:IBook;
  title:string;
  user:string;

  constructor(private _bookService:BookService, private _libraryService:LibraryService, private _http:HttpClient, public activeModal:NgbActiveModal, private _router:Router) {
    this.book = {
      id: null,
      title: '',
      description: null,
      imageUrl: null,
      status: null,
      author: null,
      publisher: null,
      year_of_publication: null
    };
  }

  ngOnInit() {
    if (this.id) {
      this._bookService.findOne(this.id).subscribe(book => {
        this.book = book;
        if (this.book.status === 'Available') {
          this.title = "Issue";
        } else {
          this.title = "Release";
        }
      });
    }
  }

  submit() {
    if (this.book.status === 'Available') {
      this._libraryService.issueBook(this.book.id, this.user).subscribe(
        (result)=> {
          console.log(result);
          this.activeModal.close(result);
        },
        error=> {
          this.activeModal.dismiss(error);
          console.error(error);
        }
      );
    } else {
      this._libraryService.releaseBook(this.book.id, this.user).subscribe(
        (result)=> {
          console.log(result);
          this.activeModal.close(result);
        },
        error=> {
          this.activeModal.dismiss(error);
          console.error(error);
        }
      );
    }
  }

  onBack():void {
    this._router.navigate(['/books']);
  }

}
