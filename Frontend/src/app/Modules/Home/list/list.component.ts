import { Component, OnInit } from '@angular/core';
import { httpService } from '../../../Services/http.service'

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    users = [];
    constructor(private httpService: httpService) { }

    ngOnInit() {
        this.httpService.users.subscribe((users: User[]) => users.forEach(user => {
            this.users.push(user)
        }));
    }
}