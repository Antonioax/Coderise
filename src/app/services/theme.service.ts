import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

Injectable({
  providedIn: 'root',
});
export class ThemeService {
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setDarkMode(isDark: boolean) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDarkMode.next(isDark);
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode.next(savedTheme === 'dark');
    console.log(this.isDarkMode.value);
  }
}
