import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, first } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  routerSub = new Subscription();
  currentPage = 'home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        console.log(val.url);
        this.currentPage = val.url;
      });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
