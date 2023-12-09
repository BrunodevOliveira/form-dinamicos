import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicControl } from '../interfaces/dynamic-control.interface';
import { DynamicFormConfig } from '../models/dynamic-form-config.model';

@Component({
  selector: 'app-dynamic-form-select',
  template: `
    <div>
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `,
  styleUrls: ['./dynamic-form-select.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DynamicFormSelectComponent implements DynamicControl {
  config!: DynamicFormConfig;
}
