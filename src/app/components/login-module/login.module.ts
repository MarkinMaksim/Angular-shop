import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const comp = [
  LoginComponent
]

@NgModule({
  declarations: [ ...comp ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ ...comp ]
})
export class LoginModule { }
