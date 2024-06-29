import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: "./contact.component.scss"
})
export class ContactComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
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
  }
}
