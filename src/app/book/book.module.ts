import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {BookService} from "./book.service";
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'books', component: ListComponent }
    ]),
    CommonModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  declarations: [ListComponent]
})
export class BookModule { }
