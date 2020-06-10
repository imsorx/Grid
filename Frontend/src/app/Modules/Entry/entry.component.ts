import { Component } from '@angular/core';
import { ElectronService } from '../../Services/electron.service';

@Component({
    selector: 'entry',
    template: '<input type="button" value="ENTER" (click)="enter()">',
    styles: [':host{width:100%;height:100%;display:grid;place-content:center}']
})


export class EntryComponent {

    constructor(private electron: ElectronService) { }

    enter(): void {
        this.electron.ipcRenderer.invoke('auth', 200);
        console.log('working')
    }
}