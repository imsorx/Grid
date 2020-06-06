import { Component } from '@angular/core';
import { ElectronService } from '../core/services';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;

    constructor(private electron: ElectronService) {
        this.win = this.electron.remote.getCurrentWindow();
        console.log(this.win);
    }

    minimize() {
        this.win.minimize();
        console.log('Clicked');
    }
    close() {
        this.win.close();
    }
}