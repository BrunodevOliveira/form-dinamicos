import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlErrorsDirective } from './control-errors.directive';



@NgModule({
  declarations: [
    ControlErrorComponent,
    ControlErrorsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlErrorsDirective
  ]
})
export class ControlErrorsModule { }
