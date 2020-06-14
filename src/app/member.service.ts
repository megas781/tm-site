import { Injectable } from '@angular/core';
import {Member} from "./data-model/Member";
import {ajaxGet} from 'rxjs/internal-compatibility';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private people = new Map<string, Member>();

  constructor() { }

  fetchMembers(callback: () => void) {
    let self = this;
    ajaxGet("https://spreadsheets.google.com/feeds/cells/1Bh-cfOrz5tfhlIE9UohaS0koI4TJZ5akNupkIPoDDCs/od6/public/values?alt=json").subscribe(function(ajax) {

      const mappings = {1: "fio", 2: "birthday", 3: "group", 4: "courseNumber", 5: "faculty", 6: "alive", 7: "photoUrl", 8:"vkUrl", 9: "position", 10: "comment"};
      let badIds = [];

      for (let i = 0; i < ajax.response.feed.entry.length; i++) {
        let cell = ajax.response.feed.entry[i];
        //Идентифицируем участника
        const id: string = cell.gs$cell.row;
        if (id == "1") {
          continue;
        }
        //Определяем тип поля
        const fieldTypeNumber = cell.gs$cell.col;
        const fieldName = mappings[fieldTypeNumber];

        if (fieldName == "alive" && cell.content.$t == "0") {
          badIds.push(id);
          self.people.delete(id);
        }
        //Проверка на то, является ли запись "живой"
        if (!badIds.includes(id)) {
          //Если это первое поле, то инициализируем
          if (!self.people.get(id)) {
            self.people.set(id, new Member(id));
          }
          //Устанавливаем значение
          self.people.get(id)[fieldName] = cell.content.$t;
        }
      }
      // console.log(this.people);
      callback();
    })
  }

  getMembers(): Array<Member> {
    let returnArray = new Array<Member>();
    this.people.forEach(function(value, key, map) {
      returnArray.push(value);
    })
    return returnArray;
  }

  getMemberById(id: string): Member {
    return this.people.get(id);
  }

}
