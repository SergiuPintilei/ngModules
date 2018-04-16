import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [
    UserService,
    AuthGuard
  ]
})
export class CoreModule { }
