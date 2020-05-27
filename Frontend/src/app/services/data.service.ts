import { Injectable } from "@angular/core";
import { httpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  users = [];
  user: object;

  constructor(private http: httpService) {
    http.getUsers().subscribe((usrs) => {
      for (let user in usrs) {
        this.users.push(user)
      }
    });
  }

  getuserlist() {
    return this.users;
  }

  selecteduser(obj: object) {
    this.user = obj;
  }

  getuser() {
    return this.user;
  }
}
