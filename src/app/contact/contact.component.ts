import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  validName?: string;
  validEmail?: string;

  constructor(private _form: FormBuilder) {
    this.contactForm = this._form.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  //SINGLE ERROR HANDLER 👇
  // hasError(controlName: string, errorType: string) {
  //   return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
  // }

  //MULTIPLE ERROR HANDLER 👇
  hasError(controlName: string, ...errorTypes: string[]): boolean {
    const control = this.contactForm.get(controlName);
    if (control && control.touched) {
      return errorTypes.some(errorType => control.hasError(errorType));
    }
    return false;
  }

  sendMail() {
    console.log(this.contactForm)
    this.validName = this.contactForm.controls['name'].status;
    this.validEmail = this.contactForm.controls['email'].status;

    // console.log("name: ", this.validName)
    // console.log("Email: ", this.validEmail)
  }
}
