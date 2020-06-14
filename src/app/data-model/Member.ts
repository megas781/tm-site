export class Member {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  get fio(): string {
    return this._fio;
  }
  set fio(value: string) {
    this._fio = value;
  }
  get birthday(): string {
    return this._birthday;
  }
  set birthday(value: string) {
    this._birthday = value;
  }
  get group(): string {
    return this._group;
  }
  set group(value: string) {
    this._group = value;
  }
  get faculty(): string {
    return this._faculty;
  }
  set faculty(value: string) {
    this._faculty = value;
  }
  get course(): number {
    return this._course;
  }
  set course(value: number) {
    this._course = value;
  }
  get photoUrl(): string {
    return this._photoUrl;
  }
  set photoUrl(value: string) {
    this._photoUrl = value;
  }
  get vkUrl(): string {
    return this._vkUrl;
  }
  set vkUrl(value: string) {
    this._vkUrl = value;
  }
  get duty(): string {
    return this._duty;
  }
  set duty(value: string) {
    this._duty = value;
  }
  get comment(): string {
    return this._comment;
  }
  set comment(value: string) {
    this._comment = value;
  }
  private _id: string;
  private _fio: string = "";
  private _birthday: string = "";
  private _group: string = "";
  private _faculty: string = "";
  private _course: number = null;
  private _photoUrl: string = "";
  private _vkUrl: string = "";
  private _duty: string = "";
  private _comment: string = "";

  constructor(id: string) {
    this._id = id;
  }
}
