import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UppercasePipe } from './uppercase.pipe';
import { ToggleDirective } from './toggle.directive';
import { AuthGuard } from './auth.guard';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    ToggleDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HomeModule
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
