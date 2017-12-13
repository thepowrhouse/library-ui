import {Component, OnInit, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IBook} from "../book";
import {BookService} from "../book.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  id:number;
  book:IBook;

  ngOnInit() {
    if (this.id) {
      this._bookService.findOne(this.id).subscribe(book => this.book = book);
    }
  }

  constructor(private _bookService:BookService, private _http:HttpClient, public activeModal:NgbActiveModal, private _router:Router) {
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

  save() {
    this._bookService.saveOrUpdate(this.book).subscribe(
      (book:IBook)=> {
        console.log(book);
        this.activeModal.close(book);
        this._router.navigate(["/books/" + book.id]);
      },
      error=> {
        this.activeModal.dismiss(error);
        console.error(error);
      }
    );
  }

}
