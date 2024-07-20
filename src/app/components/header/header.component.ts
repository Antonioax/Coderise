import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeSwitchComponent } from '../shared/theme-switch/theme-switch.component';
import { ThemeService } from '../../services/theme.service';
import { MenuIconComponent } from '../shared/menu-icon/menu-icon.component';
import { LanguageSwitchComponent } from '../shared/language-switch/language-switch.component';
import { LanguageModalComponent } from "../language-modal/language-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ThemeSwitchComponent,
    MenuIconComponent,
    LanguageSwitchComponent,
    LanguageModalComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenu = false;
  isMenuClosing = false;

  isDarkMode: boolean = false;
  isDarkSub!: Subscription;

  isLanguageModal: boolean = false;

  routerSub = new Subscription();

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.onMenuClose();
      });

    this.isDarkSub = this.themeService.isDarkMode.subscribe({
      next: (mode) => (this.isDarkMode = mode),
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
    this.isDarkSub.unsubscribe();
  }

  onMenuClose() {
    this.isMenuClosing = true;
    setTimeout(() => {
      this.isMenu = false;
      this.isMenuClosing = false;
    }, 300);
  }

  onSetDarkMode(mode: boolean) {
    this.themeService.setDarkMode(mode);
  }
}
