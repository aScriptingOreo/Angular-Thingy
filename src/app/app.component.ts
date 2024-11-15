import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CalendarComponent } from './calendar.component';
import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CalendarComponent, UserProfileComponent, UserSettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-thingy';
}