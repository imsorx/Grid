import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { GlobalService } from '../../../services/global.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.scss']
})

export class SettingsComponent implements OnInit {

    constructor(private global: GlobalService) {
    }

    close() {
        this.global.toggleSettings(false);
    }

    ngOnInit() {
        Feather.replace()
    }
}