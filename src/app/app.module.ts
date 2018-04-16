import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { UppercasePipe } from './uppercase.pipe';
import { ToggleDirective } from './toggle.directive';
import { AuthGuard } from './auth.guard';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UppercasePipe,
    ToggleDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
