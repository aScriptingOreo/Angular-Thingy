import { Component, Input, Output, EventEmitter } from '@angular/core';

interface UserSettings {
  theme: string;
}

@Component({
  selector: 'app-user-settings',
  template: `<p>Settings: {{ settings.theme }}</p>`,
  standalone: true
})
export class UserSettingsComponent {
  @Input() settings!: UserSettings;
  @Output() onSettingsChange = new EventEmitter<UserSettings>();

  changeSettings(newSettings: UserSettings) {
    this.onSettingsChange.emit(newSettings);
  }
}