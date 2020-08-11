import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/user';
import { Message } from '../models/message';


@Injectable()
export class ChatService {

    user$: Subject<User> = new Subject();
    messages$: ReplaySubject<Message>;

    dummy = [
        {
            parentId: '1',
            me: true,
            data: 'Please! you will get your shipment by tommorow'
        },
        {
            parentId: '1',
            me: false,
            data: 'You are oliberated'
        },
        {
            parentId: '1',
            me: false,
            data: 'By the orders of Peaky Blinders!'
        }
    ]

    constructor(private route: ActivatedRoute, private usersService: UsersService) {
        this.route.params.subscribe(params => {
            this.usersService.user(params['id']).subscribe((u: User) => {
                this.user$.next(u);
            });
        })
        this.messages$ = new ReplaySubject();
        this.dummy.forEach(m => this.messages$.next(new Message(m.parentId, m.data, m.me)));
    }

    public get user(): Subject<User> {
        return this.user$;
    }


    public get messages(): Observable<Message> {
        return this.messages$.asObservable();
    }

    public newMsg(data: string, seen?: boolean) {
        let msg = new Message('1', data, true, seen);
        this.messages$.next(msg);
    }
}