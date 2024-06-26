import { Component, OnInit } from '@angular/core';
import { Content, HomeContent } from "../../content/home.content";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  content!: Content[];

  ngOnInit() {
    this.content = HomeContent;
  }
}
