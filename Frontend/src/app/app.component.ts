import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronService } from './Services/electron.service';
import { AppConfig } from '../environments/environment.dev';
import * as Feather from 'feather-icons';
import { GlobalService } from './services/global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

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

  ngOnInit() {
    Feather.replace();
  }
  ngOnDestroy() {
    this.global.showSettings.unsubscribe();
  }
}
