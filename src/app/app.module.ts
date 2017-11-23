import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FSDSharedModule } from "@fsd-shared/fsd-shared.module";
import { GlobalErrorHandler } from "@fsd-shared/error-handler";
import {ConfigService} from "@app/services/config.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BookService} from './bookservice/bookservice';
import {HeaderComponent} from './header/header.component';
import { BookSearchComponent } from './bookservice/booksearch/booksearch.component';
import { BookViewComponent } from './bookservice/bookview/bookview.component';
import { BookApprovalComponent } from './bookservice/bookapproval/bookapproval.component';
import { BookRequestComponent } from './bookservice/bookrequest/bookrequest.component';
import { BookAddServiceComponent } from './bookservice/bookaddservice/bookaddservice.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookViewComponent,
    BookApprovalComponent,
    BookRequestComponent,
    BookAddServiceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FSDSharedModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ConfigService,
    BookService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
