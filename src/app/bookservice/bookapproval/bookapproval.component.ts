import { Component , ElementRef,ViewChild} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../bookservice.model";

@Component({
    selector: 'bookapproval-root',
    templateUrl: './bookapproval.component.html'
}
)
export class BookApprovalComponent{
        constructor(private http: HttpClient){
            
              }
    
        

        approveBookRequest(){
            console.log("Approved");
        }

        rejectBookRequest(){
            console.log("Rejected");
        }
}