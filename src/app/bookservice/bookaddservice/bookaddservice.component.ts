import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";

@Component({
    selector: 'bookaddservice-root',
    templateUrl: './bookaddservice.component.html'
}
)
export class BookAddServiceComponent{
    
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

        addBooks(){
            console.log("Books Added");
        }

        rejectBookRequest(){
            console.log("Rejected");
        }
}