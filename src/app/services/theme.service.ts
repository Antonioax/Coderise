import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

Injectable({
  providedIn: 'root',
});
export class ThemeService {
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setDarkMode(isDark: boolean) {
    if (this.isBrowser()) localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDarkMode.next(isDark);
  }

  initializeTheme() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      this.isDarkMode.next(isDark);
    } else {
      this.isDarkMode.next(false); // Default to light mode on the server
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
