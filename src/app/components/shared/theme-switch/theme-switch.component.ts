import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent implements OnInit {
  isDarkMode: boolean = false;
  isDarkSub!: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkSub = this.themeService.isDarkMode.subscribe({
      next: (mode) => (this.isDarkMode = mode),
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
