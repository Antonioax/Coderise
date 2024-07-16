import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeSwitchComponent } from "../shared/theme-switch/theme-switch.component";
import { ThemeService } from "../../services/theme.service";
import { MenuIconComponent } from "../shared/menu-icon/menu-icon.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ThemeSwitchComponent, MenuIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenu = false;
  isMenuClosing = false;

  isDarkMode: boolean = false;
  isDarkSub!: Subscription;

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
}
