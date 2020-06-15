export class Event {
  id: string;
  title: string = "";
  text: string = "";
  address: string = "";
  date: string = "";
  time: string = "";
  photoUrl: string = "";

  constructor(id: string) {
    this.id = id;
  }
}
