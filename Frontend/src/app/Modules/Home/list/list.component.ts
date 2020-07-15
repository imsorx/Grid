import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../Services/core.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    id: string;
    users:User[];
    constructor(private core: CoreService) {
        this.id = this.core.currentUser._id;
    }

    ngOnInit() {
        this.users = this.core.users;
    }
}