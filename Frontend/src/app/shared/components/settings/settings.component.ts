import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { ElectronService } from '../../../services/electron.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.scss']
})

export class SettingsComponent implements OnInit {

    constructor(private global: GlobalService, private electron: ElectronService, private auth: AuthService) {
    }

    close() {
        this.global.toggleSettings(false);
    }

    deleteUser() {
        this.auth.deleteUser().subscribe(res => this.global.newToast('success', 'Account Deleted Successfully'), err => this.global.newToast('error', err.error.error))
        setTimeout(() => {
            this.electron.ipcRenderer.invoke('auth', 400);
        }, 2000)
    }
    ngOnInit() {
    }
}