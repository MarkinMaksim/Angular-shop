import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
export class CustomValidators {
    static addressRequired(c: AbstractControl): ValidationErrors | null {
        debugger;
        const sendProductControll = c.get('sendProducts')!;
        const addressControll = c.get('address')!;
        if (sendProductControll.value) {
            if (addressControll.disabled)
                addressControll.enable();
            addressControll.setValidators(Validators.required)
        } else {
            addressControll.clearValidators();
            if (addressControll.enabled)
                addressControll.disable();
        }

        return null;
    }

    static startsWithUpper(c: AbstractControl): ValidationErrors | null {
        let regExp = new RegExp('[A-Z]+[A-Za-z]+');
        debugger;
        if (!regExp.test(c.value)) {
            return {
                pattern: true
            }
        }

        return null;
    }
}
