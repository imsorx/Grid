import { Component } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;
    body: HTMLElement = document.body;
    isDark: boolean = true;


    constructor(private electron: ElectronService) {
        this.win = this.electron.remote.getCurrentWindow();
    }

    minimize(): void {
        this.win.minimize();
    }
    close(): void {
        this.win.close();
    }
    toggleMode(): void {
        this.body.classList.toggle('light');
        this.isDark = !this.isDark;
    }
}