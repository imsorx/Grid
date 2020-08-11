import { Component } from '@angular/core';
import { ElectronService } from '../../../services/electron.service';
import { Router } from '@angular/router';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;
    isDark: boolean = true;
    body: HTMLElement = document.body;

    constructor(private electron: ElectronService, private router: Router) {
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
