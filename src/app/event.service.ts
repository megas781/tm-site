import {Injectable} from '@angular/core';
import {ajaxGet} from 'rxjs/internal-compatibility';
import {Event} from './data-model/Event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  events = new Map<string, Event>();

  adIndex = 14;

  constructor() {
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
      console.log(self.events);
      if (callback) {
        callback();
      }
    });
  }

  getEvents(): Array<Event> {
    let returnArray = new Array<Event>();
    this.events.forEach(function(value, key, map) {
      returnArray.push(value);
    });
    // let you = new Event('invite');
    // you.vkUrl = 'https://vk.com/id0';
    // you.photoUrl = 'https://avatars.mds.yandex.net/get-zen_doc/1209363/pub_5bac51271c5a9600aa6bc22c_5bac5171584c1f00aa3dd749/scale_1200';
    // you.fio = 'А возможно, и ты!';
    // you.position = 'Присоединяйся к нам!';
    // // returnArray.splice(this.adIndex, 0, you);
    // returnArray.push(you);
    return returnArray;
  }

  getEventById(id: string): Event {
    return this.events.get(id);
  }
}
