import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  isDarkMode!: boolean;
  isDarkSub!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) document.body.scrollTop = 0;
    this.title.setTitle('coderise | Contact');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Get in touch with coderise team to fulfill your project idea.',
      },
      {
        name: 'keywords',
        content: 'coderise, Coderise, software, website, application, contact',
      },
    ]);

    this.isDarkSub = this.themeService.isDarkMode.subscribe({
      next: (mode) => {
        this.isDarkMode = mode;
      },
    });
  }

  ngOnDestroy() {
    this.isDarkSub.unsubscribe();
  }
}
