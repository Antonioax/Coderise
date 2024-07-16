import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit() {
    if (this.isBrowser()) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isBrowser()) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
