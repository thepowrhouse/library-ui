import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";

@Component({
    selector: 'bookview-root',
    templateUrl: './bookview.component.html'
}
)
export class BookViewComponent{
    constructor(private http: HttpClient){
        
          }


}