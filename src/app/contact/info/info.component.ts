import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnChanges {


  @Input() nicType: string = 'NIC'
  documentForm: FormGroup;


  constructor(private _form: FormBuilder) {
    this.documentForm = this._form.group({
      nic: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  hasError(controlName: string, ...errorTypes: string[]): boolean {
    const control = this.documentForm.get(controlName);
    if (control && control.touched) {
      return errorTypes.some(errorType => control.hasError(errorType));
    }
    return false;
  }
}
