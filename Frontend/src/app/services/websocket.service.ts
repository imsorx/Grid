import { Injectable } from '@angular/core';
const wrapper = require('ws-wrapper');

@Injectable({
  providedIn: 'root',
})

export class WebsocketService {

  private ws: any;

  constructor() {
    this.ws = new wrapper(new WebSocket('ws://localhost:4040'));
    console.log('Connected!');
  }

  public logout() {
    this.ws.disconnect();
  }
  login(userId: string): void {
    this.ws.emit('login', userId);
    console.log('Connected');
  }


  send(to: string, message: string) { }
}
