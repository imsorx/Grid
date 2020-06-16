import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../Services/electron.service';
import * as Feather from 'feather-icons';

@Component({
    selector: 'entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.scss']
})


export class EntryComponent implements OnInit {

    errMessage: string;
    isFail: boolean = false;
    constructor(private electron: ElectronService) { }

    enter(): void {
        this.electron.ipcRenderer.invoke('auth', 200);
    }

    signup(): void {
        this.errMessage = '503 Service Unavailable'
        this.isFail = !this.isFail;
        setTimeout(() => this.isFail = !this.isFail, 2000);
    }

    ngOnInit() {
        Feather.replace();
    }
}