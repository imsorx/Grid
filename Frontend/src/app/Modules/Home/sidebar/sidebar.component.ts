import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';
import { CoreService } from '../../../Services/core.service';
import { GlobalService } from '../../../services/global.service';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    currentUser: User_details;
    viewMore = false;

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

    toggleviewMore() {
        this.viewMore = !this.viewMore;
    }
    ngOnInit() {
        this.currentUser = this.core.user;
    }
}