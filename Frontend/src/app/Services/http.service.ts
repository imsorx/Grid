import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment.dev';


@Injectable({ providedIn: "root" })


export class httpService {

    API: string
    _token: string;

    constructor(private http: HttpClient) {
        this._token = JSON.parse(localStorage.getItem('user')).token;
        this.API = AppConfig.API
    }

    public user(id: string): Observable<User> {
        return this.http.get<User>(`${this.API}/users/${id}`, {
            headers: { Authorization: `Bearer ${this._token}` },
        });
    }

    public get users(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API}/users`, { headers: { Authorization: `Bearer ${this._token}` } });
    }

    public login(details: { mail: string, pwd: string }): Observable<User_details> {
        return this.http.post<User_details>(`${this.API}/login`, { mail: details.mail, pwd: details.pwd });
    }
}