import { Component } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';
import { CoreService } from '../../../Services/core.service';


@Component({
    selector: 'titlebar',
    templateUrl: 'titlebar.component.html',
    styleUrls: ['titlebar.component.scss']
})

export class TitlebarComponent {

    win: Electron.BrowserWindow;
    isDark: boolean = true;


    constructor(private electron: ElectronService, private core: CoreService) {
        this.win = this.electron.remote.getCurrentWindow();
    }

    minimize(): void {
        this.win.minimize();
    }
    close(): void {
        this.win.close();
    }
    toggleMode(): void {
        this.isDark = this.core.toggleTheme();
    }
}