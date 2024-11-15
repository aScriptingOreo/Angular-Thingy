import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>{{ title }}</h1>`,
  standalone: true
})
export class HeaderComponent {
  @Input() title: string = '';
}