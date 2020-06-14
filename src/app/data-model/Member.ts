export class Member {

  id: string;
  fio: string = "";
  birthday: string = "";
  group: string = "";
  faculty: string = "";
  course: string = "";
  photoUrl: string = "";
  vkUrl: string = "";
  position: string = "";
  comment: string = "";

  constructor(id: string) {
    this.id = id;
  }
}
