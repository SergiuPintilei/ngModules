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

const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
