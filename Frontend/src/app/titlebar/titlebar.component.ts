import { Component, AfterViewInit } from '@angular/core';
import { ElectronService } from '../core/services';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent implements AfterViewInit {

    win: Electron.BrowserWindow;

    constructor(private electron: ElectronService) {
        this.win = electron.remote.getCurrentWindow();
    }

    minimize() {
        this.win.minimize();
    }
    close() {
        this.win.close();
    }
    ngAfterViewInit() {
        // Feather.replace();
        document.getElementById('minus').addEventListener('click', () => this.minimize())
        document.getElementById('x').addEventListener('click', () => this.close());
    }
}