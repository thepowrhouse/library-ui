import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/userlist.component';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DetailComponent} from './detail/userdetail.component';
import {UserGuardService} from './user-guard.service';
import {UserEditComponent} from './edit/useredit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: ListComponent },
      { path: 'users/:id',
        canActivate: [ UserGuardService ],
        component: DetailComponent }
    ]),
    CommonModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserGuardService
  ],
  entryComponents: [
    UserEditComponent
  ],
  declarations: [ListComponent, DetailComponent, UserEditComponent]
})
export class UserModule { }
