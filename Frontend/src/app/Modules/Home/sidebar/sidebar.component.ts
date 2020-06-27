import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';
import { CoreService } from '../../../Services/core.service';
import { Router } from '@angular/router';


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
        private router: Router,
        private core: CoreService) {
    }

    logout(): void {
        this.electron.ipcRenderer.invoke('auth', 400);
    }

    toSettings(): void {
        this.router.navigate(['settings']);
    }

    toggleviewMore() {
        this.viewMore = !this.viewMore;
    }
    ngOnInit() {
        this.currentUser = this.core.user;
    }
}