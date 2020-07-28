import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../services/electron.service';
import { CoreService } from '../../../services/core.service';
import { GlobalService } from '../../../services/global.service';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    currentUser: User_details;

    constructor(
        private electron: ElectronService,
        private global: GlobalService,
        private core: CoreService) {
    }

    logout(): void {
        this.electron.ipcRenderer.invoke('auth', 400);
    }

    toSettings(): void {
        this.global.toggleSettings(true);
    }

    throwError() {
        this.global.newToast('error', 'Not yet implemented!');
    }
    throwWarn() {
        this.global.newToast('warn', 'Join illumunati first!')
    }
    throwSuccess() {
        this.global.newToast('success', 'Already Opened!')
    }

    showProfile() {
        this.global.toggleProfile(true);
    }
    ngOnInit() {
        this.currentUser = this.core.currentUser;
    }
}