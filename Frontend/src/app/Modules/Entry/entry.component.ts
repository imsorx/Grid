import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../Services/electron.service';
import * as Feather from 'feather-icons';
import { httpService } from '../../Services/http.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.scss']
})


export class EntryComponent implements OnInit {

    errMessage: string;
    isFail: boolean = false;
    constructor(
        private electron: ElectronService,
        private http: httpService) { }

    submit(f: NgForm): void {
        this.http.login(f.value).subscribe(
            (res: User_details) => {
                this.electron.ipcRenderer.invoke('auth', 200);
                localStorage.setItem('user', JSON.stringify(res))
            }, (err) => {
                console.log(err)
                this.displayError(err.error);
            });
    }

    signup(): void {
        this.displayError('Not ye implemented');
    }

    displayError(message: string): void {
        this.errMessage = message;
        this.isFail = !this.isFail;
    }

    ngOnInit() {
        Feather.replace();
    }
}