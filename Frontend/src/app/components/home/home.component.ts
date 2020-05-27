import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private websocket: WebsocketService, private electron: ElectronService) {
    // let userId = this.electron.remote.getGlobal('session').user._id;
    // this.websocket.login(userId);
  }

  ngOnInit() {
  }

}
