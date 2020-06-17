import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.scss']
})

export class SettingsComponent implements OnInit {
    constructor(private router: Router) { }
    toHome(): void {
        this.router.navigate(['/home']);
    }
    ngOnInit() {
        Feather.replace()
    }
}