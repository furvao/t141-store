import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [UsersComponent, LoginComponent]
})
export class UsersModule { }
