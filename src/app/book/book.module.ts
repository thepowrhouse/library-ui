import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {BookService} from './book.service';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {BookGuardService} from './book-guard.service';
import {EditComponent} from './edit/edit.component';
import {LibraryService} from "./library.service";
import {IssueComponent} from "./issue/issue.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'books', component: ListComponent },
      { path: 'books/:id',
        canActivate: [ BookGuardService ],
        component: DetailComponent }
    ]),
    CommonModule,
    FormsModule
  ],
  providers: [
    BookService,
    BookGuardService,
    LibraryService
  ],
  entryComponents: [
    EditComponent,
    IssueComponent
  ],
  declarations: [ListComponent, DetailComponent, EditComponent, IssueComponent]
})
export class BookModule { }
