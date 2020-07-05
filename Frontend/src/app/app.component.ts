import { Component, AfterViewInit } from '@angular/core';
import { ElectronService } from './Services/electron.service';
import { AppConfig } from '../environments/environment.dev';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(public electronService: ElectronService) {


    if (electronService.isElectron) {
      console.groupCollapsed('%cDEV MODE', 'font-size:16px;padding:8px');

      console.groupCollapsed('Process');
      console.log(process.env);
      console.groupEnd();

      console.groupCollapsed('Environment');
      console.log(AppConfig);
      console.groupEnd();

      console.groupCollapsed('Electron ipcRenderer');
      console.log(electronService.ipcRenderer);
      console.groupEnd();

      console.groupCollapsed('NodeJS childProcess');
      console.log(electronService.childProcess);
      console.groupEnd();

      console.groupEnd();
    } else {
      console.log('Mode web');
    }
  }



  ngAfterViewInit() {
    Feather.replace();
  }
}
