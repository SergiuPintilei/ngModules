import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
