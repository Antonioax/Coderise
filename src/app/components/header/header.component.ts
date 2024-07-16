import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeSwitchComponent } from "../shared/theme-switch/theme-switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenu = false;
  isMenuClosing = false;

  routerSub = new Subscription();

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.onMenuClose();
      });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  onMenuClose(){
    this.isMenuClosing = true;
    setTimeout(() => {
      this.isMenu = false;
      this.isMenuClosing = false;
    }, 300);
  }
}
