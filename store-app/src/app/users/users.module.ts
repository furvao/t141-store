import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'users', component: UsersComponent }

    ]),
  ],
  declarations: [UsersComponent, LoginComponent]
})
export class UsersModule { }
