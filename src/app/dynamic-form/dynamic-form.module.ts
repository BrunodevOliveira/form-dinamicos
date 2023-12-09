import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
