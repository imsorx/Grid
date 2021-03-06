import { Component, AfterViewChecked, OnDestroy } from '@angular/core';
import * as Feather from 'feather-icons';
import { AppConfig } from '../environments/environment.dev';
import { GlobalService } from './services/global.service';
import { ElectronService } from './services/electron.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,AfterViewChecked {

  isSettings: Boolean = false;

  constructor(public electronService: ElectronService, private global: GlobalService) {

    global.showSettings.subscribe(value => {
      this.isSettings = value;
    })

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

  ngAfterViewChecked() {
    Feather.replace();
  }
  ngOnDestroy() {
    this.global.showSettings.unsubscribe();
    localStorage.clear();
  }
}
