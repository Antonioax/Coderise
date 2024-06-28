import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Content, HomeContent } from '../../content/home.content';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  content!: Content[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) document.body.scrollTop = 0;
    this.content = HomeContent;
  }
}
