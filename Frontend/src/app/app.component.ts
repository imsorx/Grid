import { Component, AfterViewInit } from '@angular/core';
import { ElectronService } from './Services/electron.service';
import { AppConfig } from '../environments/environment';
import * as Feather from 'feather-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(public electronService: ElectronService) {

    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.groupCollapsed('Electron Environments')
      console.log(process.env);
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
      console.groupEnd();
    } else {
      console.log('Mode web');
    }
  }



  ngAfterViewInit() {
    Feather.replace();
  }
}
