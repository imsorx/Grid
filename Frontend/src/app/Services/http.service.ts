import { Injectable } from '@angular/core'
import { Observable, Observer } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable(
    {
        providedIn: "root"
    }
)
export class httpService {
    userStore$: Observable<User>;
    userStore: User[] = [
        {
            id: 1,
            name: 'Thomas Shelby',
            lstMsg: 'By the order of Peaky Blinders!',
            img: 'assets/thomas.jpg'
        },
        {
            id: 2,
            name: 'Heisenberg',
            lstMsg: 'Say my NAME!',
            img: 'assets/heisenberg.jpg'
        },
        {
            id: 3,
            name: 'John Snow',
            lstMsg: 'The Winter is Coming!',
            img: 'assets/jon.jpg'
        }
    ]

    constructor(private http: HttpClient) {

    }


    public user(id: number): User {
        let user: User;
        this.userStore.filter(x => {
            if (x.id == id) {
                user = x;
            }
        })
        return user;
    }

    public get users(): Observable<User> {
        this.userStore$ = Observable.create((observer: Observer<User>) => {
            this.userStore.forEach(u => observer.next(u));
        })
        return this.userStore$;
    }

    public login(details: { mail: string, pwd: string }): Observable<object> {
        console.log(details);
        return this.http.post('http://localhost:4040/login', { mail: details.mail, pwd: details.pwd });
    }
}