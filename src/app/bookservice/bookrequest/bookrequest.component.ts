import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'bookrequest-root',
    templateUrl: './bookrequest.component.html'
}
)
export class BookRequestComponent{
        constructor(private http: HttpClient){
            
              }
        requestBooks(){
            console.log("Books Requested");
        }
}