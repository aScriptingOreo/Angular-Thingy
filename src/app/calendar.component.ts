import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `<p>Calendar from {{ startDate }} to {{ endDate }}</p>`,
  standalone: true
})
export class CalendarComponent {
  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Output() onSelect = new EventEmitter<Date>();

  selectDate(date: Date) {
    this.onSelect.emit(date);
  }
}