import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as Feather from 'feather-icons';
import { AuthService } from '../../services/auth.service';
import { ElectronService } from '../../services/electron.service';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.scss']
})


export class EntryComponent implements OnInit, AfterViewInit {

    @ViewChild('autofocus') focusElement: ElementRef;
    loginForm: FormGroup;
    signupForm: FormGroup;
    showSignup: boolean = false;

    constructor(
        private electron: ElectronService,
        private global: GlobalService,
        private auth: AuthService,
        private fb: FormBuilder
    ) { }

    login(): void {
        if (this.loginForm.valid) {
            this.auth.login(this.loginForm.value).subscribe(
                (res: loginResponse) => {
                    this.electron.ipcRenderer.invoke('auth', 200);
                    localStorage.setItem('user', JSON.stringify(res));
                    this.loginForm.reset();
                }, (err) => {
                    this.global.newToast('error', err.error);
                });
        } else {
            this.global.newToast('warn', 'Please enter valid credentials');
        }
    }

    signup(): void {
        if (this.signupForm.valid) {
            this.auth.signup(this.signupForm.value).subscribe(
                (res: any) => {
                    this.showSignup = false;
                    this.global.newToast('success', 'Registered succesfully, Login using same to proceed.');
                },
                (err) => {
                    this.global.newToast('error', err.error)
                });
        } else {
            this.global.newToast('warn', 'Please enter valid credentials');
        }
    }


    public get isValid(): boolean {
        return this.showSignup ? this.signupForm.valid : this.loginForm.valid;
    }


    ngOnInit() {
        this.loginForm = this.fb.group({
            mail: ['', Validators.required],
            pwd: ['', Validators.required],
        });
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            mail: ['', Validators.required],
            pwd: ['', Validators.required],
            dsg: ['']
        })
    }

    ngAfterViewInit() {
        Feather.replace();
        this.focusElement.nativeElement.focus();
    }
}
