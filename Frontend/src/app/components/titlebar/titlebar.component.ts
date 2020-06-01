import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';
import { WebsocketService } from './../../services/websocket.service';
@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor(private electron: ElectronService, private router: Router, private websocketservice: WebsocketService) {
  }

  closewindow() {
    const window = this.electron.remote.getCurrentWindow();
    window.close();
  }
  minwindow() {
    const window = this.electron.remote.getCurrentWindow();
    window.minimize();
  }
  signout() {
    this.websocketservice.logout();
    this.router.navigateByUrl('/');
  }

  getroute() {
    if (this.router.url === '/entry/login' || this.router.url === '/chat' || this.router.url === '/entry/signup') {
      return false;
    }
    return true;
  }

  ngOnInit() {
  }

}
