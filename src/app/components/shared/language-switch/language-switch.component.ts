import { Component, output } from '@angular/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
})
export class LanguageSwitchComponent {
  clicked = output();

  onLanguage() {
    this.clicked.emit();
  }
}
