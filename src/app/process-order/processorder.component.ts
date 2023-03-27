import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, AbstractControlOptions, FormArray, } from '@angular/forms';
import { UserModel } from '../components/models/user-model';
import { CustomValidators } from '../validators/custom.validators';

@Component({
  selector: 'app-process-order',
  templateUrl: './processorder.component.html',
  styleUrls: ['./processorder.component.css']
})
export class ProcessorderComponent implements OnInit {

  validationMessagesMap = new Map([
    ['firstName', {
      message: '', // <== message for user
      required: 'Please enter your first name.',
      pattern: 'The first name must starts with upper letter.'
    }],
    ['lastName', {
      message: '',
      required: 'Please enter your last name.'
    }],
    ['email', {
      message: '',
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
    }],
    ['address', {
      message: '',
      required: 'Please enter your address.'
    }],
    ['phone', {
      message: '',
      required: 'Please enter your phone number.'
    }],
    ['sendProducts', {
      message: ''
    }]
  ]);

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    debugger;
    this.userForm.valueChanges.subscribe(ignorValue =>
      this.setValidationMessages()
      );
    this.setValidationMessages();
  }

  user: UserModel = new UserModel();

  userForm = this.fb.group({
    firstName: ['', [Validators.required, CustomValidators.startsWithUpper]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['',
      [Validators.required, Validators.email]
    ],
    sendGroup: this.fb.group({
      sendProducts: true,
      address: '',
    }, { validator: CustomValidators.addressRequired } as AbstractControlOptions),
    phones: this.fb.array([this.buildPhone()])
  });

  get firstName(): AbstractControl {
    return this.userForm.get('firstName')!;
  }
  get lastName(): AbstractControl {
    return this.userForm.get('lastName')!;
  }
  get email(): AbstractControl {
    return this.userForm.get('email')!;
  }
  get phone(): AbstractControl {
    return this.userForm.get('phone')!;
  }
  get phones(): FormArray {
    return this.userForm.get('phones') as unknown as FormArray;
  }

  get sendProducts(): AbstractControl {
    return this.userForm.get('sendGroup.sendProducts')!;
  }
  get address(): AbstractControl {
    return this.userForm.get('sendGroup.address')!;
  }
  get sendGroup(): AbstractControl {
    return this.userForm.get('sendGroup')!;
  }

  onSave(): void {
    // Form model
    console.log(this.userForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.userForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.userForm.getRawValue())}`);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
    console.log(this.userForm.errors)
  }
  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  isShowValidationMessage(controlName: string): boolean {
    return this.validationMessagesMap.get(controlName)!.message && (this as {
      [index:
        string]: any
    })[controlName].touched;
  }

  isSendProduct(): boolean {
    return this.userForm.get('sendGroup.sendProducts')!.value as boolean;
  }

  private buildPhone() {
    return this.fb.group({
      phone: ['', [Validators.required]]
    });
  }

  private buildValidationMessages(controlName: string): void {
    const c: AbstractControl = (this as { [index: string]: any })[controlName];
    this.validationMessagesMap.get(controlName)!.message = '';
    if (c.errors) {
      this.validationMessagesMap.get(controlName)!.message = Object.keys(c.errors)
        .map(key => {
          const value = this.validationMessagesMap.get(controlName)!;
          return (value as { [index: string]: any })[key];
        })
        .join(' ');
    }
  }

  private setValidationMessages(): void {
    this.validationMessagesMap.forEach((control, cntrlName) => {
      this.buildValidationMessages(cntrlName);
    });
  }

}
