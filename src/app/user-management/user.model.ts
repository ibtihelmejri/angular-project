

export class UserModel {
    public avatar: string;
    public email: string;
    public first_name: string;
    public id: number;
    public last_name: string

  constructor(avatar: string, email: string, first_name: string, id: number, last_name: string) {
    this.avatar = avatar;
    this.email = email;
    this.first_name = first_name;
    this.id = id;
    this.last_name = last_name;

  }
}
