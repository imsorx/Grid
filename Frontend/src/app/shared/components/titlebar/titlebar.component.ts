import { Component } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;

    constructor(private electron: ElectronService) {
        this.win = this.electron.remote.getCurrentWindow();
    }

    minimize() {
        this.win.minimize();
    }
    close() {
        this.win.close();
    }
}