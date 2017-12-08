import {Component, OnInit, Input, ElementRef, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IBook} from "../book";
import {environment} from "../../../environments/environment";
import {BookService} from "../book.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  id:number;
  book:IBook;
  avatar:any;
  
  ngOnInit() {
    if (this.id) {
      this._bookService.findOne(this.id).subscribe(book => this.book = book);
    }
  }

  constructor(private _bookService:BookService, private _http:HttpClient, public activeModal:NgbActiveModal) {
    this.book = {id: null, title: '', description: null, imageUrl: null, status: null};
  }

  save() {
    this._bookService.save(this.book).subscribe(
      (book:IBook)=> {
        console.log(book);
        this.activeModal.dismiss();
      },
      error=> {
        console.error(error);
      }
    );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.avatar = event.target.files[0];
    }
  }

  
}
