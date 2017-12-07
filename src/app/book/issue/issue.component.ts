import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IBook} from "../book";
import {BookService} from "../book.service";


@Component({
  selector: 'app-book-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class DetailComponent implements OnInit {

  errorMessage:string;
  book:IBook;

  constructor(private _route:ActivatedRoute,
              private _router:Router,
              private _bookService:BookService,
              private modalService:NgbModal) {
    this.book = {id: null, title: '', description: null, imageUrl: null, status: null};
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.findOne(id);
  }

  findOne(id:number) {
    this._bookService.findOne(id).subscribe(
      book => this.book = book,
      error => this.errorMessage = <any>error
    );
  }

  issueBook() {
    this._bookService.issueBook(this.book);
  }


  rejectBook() {
    this._bookService.rejectBook(this.book);
  }

  onBack():void {
    this._router.navigate(['/books']);
  }

}
