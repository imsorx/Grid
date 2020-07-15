import { Injectable, OnDestroy } from '@angular/core';
import { httpService } from './http.service';

@Injectable()

export class CoreService implements OnDestroy {

    public currentUser: User_details;
    public users: User[] = [];

    constructor(private httpService: httpService) {
        
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        
        this.httpService.users.subscribe((users: User[]) => users.forEach(user => {
            this.users.push(user)
        }));
    }

    ngOnDestroy() {
        this.currentUser = null
    }
}