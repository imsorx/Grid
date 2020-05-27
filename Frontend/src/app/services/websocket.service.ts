import { Injectable } from "@angular/core";
const wrapper = require('ws-wrapper');

@Injectable({
  providedIn: "root",
})

export class WebsocketService {

  private ws: any;

  constructor() {
    this.ws = new wrapper(new WebSocket('ws://localhost:4040'));
    this.ws.on('connect', () => console.log('Connected'));
  }

  login(userId: String): void {
    this.ws.emit('login', userId);
  }

  send(to: String, message: String) { }
}