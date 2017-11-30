import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FSDSharedModule} from "@fsd-shared/fsd-shared.module";
import {GlobalErrorHandler} from "@fsd-shared/error-handler";
import {ConfigService} from "@app/services/config.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {BookModule} from "./book/book.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FSDSharedModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    BookModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    ConfigService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
