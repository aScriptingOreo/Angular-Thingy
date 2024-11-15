import { Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CalendarComponent } from './calendar.component';
import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: HeaderComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];