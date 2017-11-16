import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FSDSharedModule } from "@fsd-shared/fsd-shared.module";
import { GlobalErrorHandler } from "@fsd-shared/error-handler";
import {ConfigService} from "@app/services/config.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FSDSharedModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
