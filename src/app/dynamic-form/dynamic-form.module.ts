import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorsModule } from '../control-errors/control-errors.module';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './dynamic-form-select/dynamic-form-select.component';
import { DynamicFormComponent } from './dynamic-form.component';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorsModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
