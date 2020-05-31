import { Injectable } from '@angular/core';
import { httpService } from './http.service';

interface User {
  token: string;
  _id: string;
  img: string;
  name: string;
  mail: string;
  convers: string[];
  channels: string[];
}

@Injectable({
  providedIn: 'root',
})


export class DataService {

  users: User[] = [];

  constructor(private http: httpService) {
  }

  getuserlist(): Array<User> {
    this.http.getUsers().subscribe((res: User[]) => {
      res.forEach(user => {
        this.users.push(user);
      });
    });
    return this.users;
  }
}
