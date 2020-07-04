import {FormatWidth, getLocaleDateFormat} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;

export class Event {
  id: string;
  title: string = '';
  text: string = '';
  address: string = '';
  date: string = '';
  time: string = '';
  photoUrl: string = '';

  getDateString(): string {
    return this.getDate().toLocaleString('ru', {day: 'numeric',month: 'long', year: 'numeric'});
  }

  constructor(id: string) {
    this.id = id;
  }

  getDate(): Date {
    const st = this.date;
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    return new Date(st.replace(pattern, '$3-$2-$1'));
  }
}
