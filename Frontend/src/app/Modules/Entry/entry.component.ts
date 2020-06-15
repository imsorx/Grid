import { Component,OnInit } from '@angular/core';
import { ElectronService } from '../../Services/electron.service';
import * as Feather from 'feather-icons';

@Component({
    selector: 'entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.scss']
})


export class EntryComponent implements OnInit {

    constructor(private electron: ElectronService) { }

    enter(): void {
        this.electron.ipcRenderer.invoke('auth', 200);
    }

    ngOnInit(){
        Feather.replace();
    }
}