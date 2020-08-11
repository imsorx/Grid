import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment.dev';
import { loggedUser } from '../models/loggedUser';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: "root" })


export class AuthService {

    private API: string;
    private _isLogged: boolean = false;
    public loggedUser: loggedUser;

    constructor(private http: HttpClient) {
        this.API = AppConfig.API
        this.checkAuth();
    }

    // Sign-up request
    public signup(details: object) {
        return this.http.post(`${this.API}/signup`, details);
    }

    //Login request
    public login(details: object) {
        return this.http.post(`${this.API}/login`, details);
    }

    //public method to check if logged-in
    public get isLogged(): boolean {
        return this._isLogged
    }

    //Update Info request and update current logged user object
    public updateUser(details: { _id: string, name: string, desig: string }) {
        return this.http.patch(`${this.API}/users`, details)
            .pipe(
                tap(
                    () => {
                        if (details.name) {
                            this.loggedUser.name = details.name
                        }
                        if (details.desig) {
                            this.loggedUser.dsg = details.desig;
                        }
                    }
                ))
    }

    //DELETE Account request
    public deleteUser() {
        return this.http.delete(`${this.API}/users/${this.loggedUser.id}`).pipe(tap(() => setTimeout(this.loggedUser = null, 2200)));
    }

    //Check if logged-in;if yes then set Looged user details
    private checkAuth() {
        try {
            let user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                this.loggedUser = new loggedUser(user);
                this._isLogged = true;
            }
        } catch (error) {
            console.log(error);
            console.log('Not Logged-in, please restart app!');
        }
    }

}
