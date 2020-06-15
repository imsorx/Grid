import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
    providedIn: 'root'
})

export class CoreService {

    body: HTMLElement = document.body;

    constructor(private electron: ElectronService) {
        this.electron.remote.nativeTheme.shouldUseDarkColors
     }


    toggleTheme(): boolean {
        this.body.classList.toggle('light');
        return 
    }
}