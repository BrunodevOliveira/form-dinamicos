import { ComponentRef, Directive, Inject, Self, ViewContainerRef } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ControlErrorComponent } from './control-error/control-error.component';
import { FORM_ERRORS } from './form-errors';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {

  componentRef: ComponentRef<ControlErrorComponent>;
  // submit$: Observable<Event>;
  destroy$ = new Subject<void>();

  constructor(
    @Self() private ngControl: NgControl,
    private viewContainerRef: ViewContainerRef,
    @Inject(FORM_ERRORS) private errors,
    private formGroupDirective: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.ngControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const controlErrors = this.ngControl.errors;
      if (controlErrors) {
        const [firstKey] = Object.keys(controlErrors);
        const getError = this.errors[firstKey];
        const text = getError(controlErrors[firstKey]);
        this.setError(text);
      } else if (this.componentRef) {
        this.setError(null);
      }
    });

    this.formGroupDirective.ngSubmit.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const controlErrors = this.ngControl.errors;
      if (controlErrors) {
        const [firstKey] = Object.keys(controlErrors);
        const getError = this.errors[firstKey];
        const text = getError(controlErrors[firstKey]);
        this.setError(text);
      } else if (this.componentRef) {
        this.setError(null);
      }
    });

  }



  setError(text: string) {
    if (!this.componentRef) {
      this.componentRef = this.viewContainerRef.createComponent(
        ControlErrorComponent
      );
    }

    this.componentRef.instance.text = text;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
