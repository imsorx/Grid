import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../Services/electron.service';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    constructor(private electron: ElectronService) { }

    logout(): void {
        this.electron.ipcRenderer.invoke('auth', 400);
    }
    ngOnInit() {

    }
}