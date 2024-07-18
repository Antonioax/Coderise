import { Component, output } from '@angular/core';

@Component({
  selector: 'app-language-modal',
  standalone: true,
  imports: [],
  templateUrl: './language-modal.component.html',
})
export class LanguageModalComponent {
  close = output();

  onClose(){
    this.close.emit();
  }
}
