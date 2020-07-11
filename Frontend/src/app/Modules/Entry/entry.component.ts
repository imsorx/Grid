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
    toastContent: string;
    toastType: string;

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
        this.displayError('Dis message so cool');
    }

    displayError(message: string): void {
        this.toastContent = message;
        this.toastType = "error";
    }

    dismissToast(): void {
        this.toastContent = ''
        this.toastType = ''
    }

    ngOnInit() {
        Feather.replace();
    }
}
