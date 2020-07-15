import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { GlobalService } from '../../../services/global.service';
import { ElectronService } from '../../../Services/electron.service';
import { httpService } from '../../../Services/http.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.scss']
})

export class SettingsComponent implements OnInit {

    constructor(private global: GlobalService, private electron: ElectronService,
        private http: httpService) {
    }

    close() {
        this.global.toggleSettings(false);
    }

    deleteUser() {
        this.http.deleteUser().subscribe(res => this.global.newToast('success', 'Account Deleted Successfully'), err => this.global.newToast('error', err.error.error))
        setTimeout(() => {
            this.electron.ipcRenderer.invoke('auth', 400);
        }, 2000)
    }
    ngOnInit() {
        Feather.replace()
    }
}