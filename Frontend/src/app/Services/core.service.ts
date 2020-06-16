import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'


@Injectable(
    {
        providedIn: "root"
    }
)

export class CoreService {

    users$: Observable<object>;
    usersList = [
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


    constructor() {
        this.users$ = Observable.create((observer) => {
            this.usersList.forEach(user => observer.next(user));
        });
    }

}