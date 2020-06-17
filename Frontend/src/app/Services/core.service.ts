import { Injectable } from '@angular/core'
import { Observable, Observer } from 'rxjs'

@Injectable(
    {
        providedIn: "root"
    }
)

export class CoreService {

    users$: Observable<object>;
    usersList: User[] = [
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

    constructor() {
        this.users$ = Observable.create((observer: Observer<User>) => {
            this.usersList.forEach(user => observer.next(user));
        });
    }

    public get users(): Observable<object> {
        return this.users$;
    }

    user(id: number): User {
        let user: User;
        this.usersList.filter(x => {
            if (x.id == id) {
                user = x;
            }
        })
        return user;
    }



}