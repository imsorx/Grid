import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../Services/electron.service';
import * as Feather from 'feather-icons';
import { httpService } from '../../Services/http.service';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.scss']
})


export class EntryComponent implements OnInit {


    constructor(
        private electron: ElectronService,
        private global: GlobalService,
        private http: httpService) { }

    submit(f: NgForm): void {
        this.http.login(f.value).subscribe(
            (res: User_details) => {
                this.electron.ipcRenderer.invoke('auth', 200);
                localStorage.setItem('user', JSON.stringify(res))
            }, (err) => {
                this.global.newToast('error', err.error);
            });
    }

    signup(f: NgForm): void {
        this.http.signup(f.value).subscribe(
            (res: any) => {
                this.global.newToast('success', res.message);
            },
            (err) => {
                this.global.newToast('error', err.error)
            });
    }


    ngOnInit() {
        Feather.replace();
    }
}
