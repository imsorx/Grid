import { Injectable } from '@angular/core';
import { httpService } from './http.service';

@Injectable()

export class CoreService {
    private currentUser: User_details;

    constructor(private http: httpService) {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.http.token = this.currentUser.token;
    }

    public get user() {
        return this.currentUser;
    }
    onDestroy() {
        this.currentUser = null
    }
}