import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
