import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})

export class EmailDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {

    let regExp = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+')

    if (!regExp.test(c.value)) {
      return {
        pattern: true
      }
    }

    return null;
  }

}
