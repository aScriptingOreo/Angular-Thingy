import { Component, Input } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-profile',
  template: `<p>User: {{ user.name }} ({{ user.email }})</p>`,
  standalone: true
})
export class UserProfileComponent {
  @Input() user!: User;
}