import { Component, OnChanges } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';
import { Router } from '@angular/router';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;
    body: HTMLElement = document.body;
    isDark: boolean = true;
    showToggle: boolean = false;


    constructor(private electron: ElectronService, private route: Router) {
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