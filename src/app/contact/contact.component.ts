import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

//COMPONENT
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, InfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;
  nicType: string = 'NIC'


  constructor(private _form: FormBuilder) {
    this.contactForm = this._form.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      nicType: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    // this.contactForm.valueChanges.subscribe(value => {
    //   console.log(value)
    // })
    this.contactForm.get('nicType')?.valueChanges.subscribe(value => {
      this.nicType = value;
    })
  }

  ngOnDestroy(): void {
    console.log('component destroyed')
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
    console.log(this.contactForm.get('name'))

  }
}
