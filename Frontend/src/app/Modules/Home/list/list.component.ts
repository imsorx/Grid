import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../Services/core.service'

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    users = [];
    constructor(private core: CoreService) { }

    ngOnInit() {
        this.core.users.subscribe(user => { this.users.push(user) });
    }
}