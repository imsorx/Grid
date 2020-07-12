import { Component, OnInit } from '@angular/core';
import { httpService } from '../../../Services/http.service'
import { CoreService } from '../../../Services/core.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    id: string;
    users = [];
    constructor(private httpService: httpService, private core: CoreService) {
        this.id = this.core.user._id;
    }

    ngOnInit() {
        this.httpService.users.subscribe((users: User[]) => users.forEach(user => {
            this.users.push(user)
        }));
    }
}