import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form!: FormGroup;

  onSend(){

  }
}
