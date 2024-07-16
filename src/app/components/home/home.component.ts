import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Content, HomeContent } from '../../content/home.content';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  content!: Content[];

  isDarkMode: boolean = false;
  isDarkSub!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) document.body.scrollTop = 0;
    this.title.setTitle('coderise | Home');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Everything you need to know about coderise.',
      },
      {
        name: 'keywords',
        content: 'coderise, Coderise, software, website, application',
      },
    ]);
    this.content = HomeContent;

    setTimeout(() => {
      this.isDarkSub = this.themeService.isDarkMode.subscribe({
        next: (mode) => (this.isDarkMode = mode),
      });
    }, 0);
  }

  ngOnDestroy() {
    this.isDarkSub.unsubscribe();
  }
}
