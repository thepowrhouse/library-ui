import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";

@Component({
    selector: 'bookrequest-root',
    templateUrl: './bookrequest.component.html'
}
)
export class BookRequestComponent{
    
    book = new Book('1','Pirates of caribean','The great book on pirates of caribean','1234','Jack','Newyork','Long live Pirates','2010','US','3','Available');
    
        constructor(private http: HttpClient){
            
              }
    
        searchBooks(){
            this.http.get('https://api.github.com/users/seeschweiler').subscribe(res => {
                console.log(res);
              },
              err => {
                console.log("Error occured");
              });
        }
        requestBooks(){
            console.log("Books Requested");
        }
}