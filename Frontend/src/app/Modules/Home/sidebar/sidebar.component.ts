import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';
import { Router } from '@angular/router';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    constructor(private electron: ElectronService, private router: Router) { }

    logout(): void {
        this.electron.ipcRenderer.invoke('auth', 400);
    }

    toSettings(): void {
        this.router.navigate(['settings']);
    }
    ngOnInit() {
    }
}