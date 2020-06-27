import { Injectable } from '@angular/core';


@Injectable()

export class CoreService {
    private currentUser: User_details;

    constructor() { 
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    public get user() {
        return this.currentUser;
    }
    onDestroy() {
        this.currentUser = null
    }
}