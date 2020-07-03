import {Injectable} from '@angular/core';
import {ajaxGet} from 'rxjs/internal-compatibility';
import {Event} from './data-model/Event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  events = new Map<string, Event>();

  upcomingEvents = new Array<Event>();
  pastEvents = new Array<Event>();

  constructor() {

    //Запрашиваем данные
    let self = this;
    this.fetchEvents(function() {
      self.getEvents().forEach(function(value, index, array) {
        if (value.getDate() > new Date()) {
          self.upcomingEvents.push(value);
        } else {
          self.pastEvents.push(value);
        }
      });
      //Если предстоящих мероприятий нет, то присваивем null, чтобы отобразилось сообщение об этом
      if (self.upcomingEvents.length == 0) {
        self.upcomingEvents = null;
      }
    });
  }

  fetchEvents(callback?: () => void) {
    let self = this;
    ajaxGet('https://spreadsheets.google.com/feeds/cells/1Bh-cfOrz5tfhlIE9UohaS0koI4TJZ5akNupkIPoDDCs/2/public/values?alt=json').subscribe(function(ajax) {

      const mappings = {1: 'title', 2: 'text', 3: 'address', 4: 'date', 5: 'time', 6: 'photoUrl'};
      let badIds = [];

      for (let i = 0; i < ajax.response.feed.entry.length; i++) {
        let cell = ajax.response.feed.entry[i];
        //Идентифицируем мероприятие
        const id: string = cell.gs$cell.row;
        if (id == '1') {
          continue;
        }

        //Определяем тип поля
        const fieldTypeNumber = cell.gs$cell.col;
        const fieldName = mappings[fieldTypeNumber];

        //Если это первое поле, то инициализируем
        if (!self.events.get(id)) {
          self.events.set(id, new Event(id));
        }
        //Устанавливаем значение
        self.events.get(id)[fieldName] = cell.content.$t;
      }
      // console.log(self.events);
      if (callback) {
        callback();
      }
    });
  }

  getEvents(): Array<Event> {
    //Если данные еще не получены, то не рыпаемся
    if (this.events.size === 0) {
      return  null;
    } else {
      let returnArray = new Array<Event>();
      this.events.forEach(function(value, key, map) {
        returnArray.push(value);
      });
      returnArray.sort(function(a, b) {
        return a.getDate() > b.getDate() ? -1 : 1;
      })
      return returnArray;
    }
  }

  getEventById(id: string): Event {
    return this.events.get(id);
  }
}
