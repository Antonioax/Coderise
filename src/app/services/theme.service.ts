import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  setDarkMode(isDark: boolean) {
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDarkMode.next(isDark);
  }

  initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      this.isDarkMode.next(isDark);
      console.log('SERVICE dark: ' + isDark);
    } else {
      //this.isDarkMode.next(false); // Default to light mode on the server
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
