import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment.dev';


@Injectable({ providedIn: "root" })


export class httpService {

    API: string;

    constructor(private http: HttpClient) {
        this.API = AppConfig.API
    }

    public user(id: string): Observable<User> {
        return this.http.get<User>(`${this.API}/users/${id}`);
    }

    public get users(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API}/users`);
    }

    public login(details: { mail: string, pwd: string }): Observable<User_details> {
        return this.http.post<User_details>(`${this.API}/login`, { mail: details.mail, pwd: details.pwd });
    }
    public signup(details: { mail: string, pwd: string }): Observable<string> {
        return this.http.post<string>(`${this.API}/signup`, { name: details.mail, mail: details.mail, pwd: details.pwd });
    }

}