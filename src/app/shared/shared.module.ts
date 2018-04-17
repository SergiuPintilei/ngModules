import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleDirective } from './directives/toggle.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingSpinnerComponent,
    ToggleDirective,
    UppercasePipe
  ],
  exports: [
    LoadingSpinnerComponent,
    ToggleDirective,
    UppercasePipe
  ]
})
export class SharedModule { }
