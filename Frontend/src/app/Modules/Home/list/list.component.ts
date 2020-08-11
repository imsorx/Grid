import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    id: string;
    searchTerm: string;

    constructor(private auth: AuthService, private userService: UsersService) {
        this.id = this.auth.loggedUser.id;
    }

    ngOnInit() {
    }
}
