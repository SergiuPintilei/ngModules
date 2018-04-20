import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleDirective } from './directives/toggle.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { MyService } from './my.service';

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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MyService
      ]
    };
  }
}
