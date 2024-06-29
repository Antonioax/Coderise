import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Content, HomeContent } from '../../content/home.content';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  content!: Content[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) document.body.scrollTop = 0;
    this.title.setTitle('coderise | Home');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Everything you need to know about coderise.',
      },
      { name: 'keywords', content: 'coderise, Coderise, software, website, application' },
    ]);
    this.content = HomeContent;
  }
}
