import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserGuardService } from './user-guard.service';
import { UsereditComponent } from '@app/user/edit/useredit.component';
import { UserlistComponent } from '@app/user/list/userlist.component';
import { UserdetailComponent } from '@app/user/detail/userdetail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UserlistComponent },
      { path: 'users/:id',
        canActivate: [ UserGuardService ],
        component: UserdetailComponent }
    ]),
    CommonModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserGuardService
  ],
  entryComponents: [
    UsereditComponent
  ],
  declarations: [UserlistComponent, UsereditComponent, UserdetailComponent]
})
export class UserModule { }