import { Component, OnInit, Input } from "@angular/core";
import { ElectronService } from "ngx-electron";


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input() userobj: any;

  constructor(private electron: ElectronService) { }
  userclick() {
    let mainWindow = this.electron.remote.process;
    var win = new this.electron.remote.BrowserWindow({
      width: 290,
      height: 550,
      center: true,
      resizable: false,
      frame: false,
      transparent: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    // Load the page + route
    win.loadURL("file://" + __dirname + "/index.html#/chat");
  }

  ngOnInit() { }
}
