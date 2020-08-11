import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { AppConfig } from '../../environments/environment.dev';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators'

@Injectable({ providedIn: "root" })

export class UsersService {

    private API: string;
    private usersList: User[] = [];

    constructor(private http: HttpClient, private auth: AuthService) {
        this.API = AppConfig.API
        if (auth.isLogged) {
            this.http.get(`${this.API}/users`).subscribe((res: userResponse[]) => {
                res.forEach((_user: userResponse) => this.usersList.push(new User(_user)))
            });
        }
    }

    //Get user info
    public user(id: string) {
        return this.http.get(`${this.API}/users/${id}`).pipe(map((user: userResponse) => new User(user)));
    }

    //Get users list
    public get users() {
        return this.usersList;
    }

}
