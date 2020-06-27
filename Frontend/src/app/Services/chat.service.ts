import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { httpService } from './http.service';


@Injectable()

export class ChatService {

    user$: Observable<User>;
    messages$: Observable<Message>;

    dummy = [
        {
            own: true,
            data: 'Please! you will get your shipment by tommorow'
        },
        {
            own: false,
            data: 'You are oliberated'
        },
        {
            own: false,
            data: 'By the orders of Peaky Blinders!'
        }
    ]

    constructor(private route: ActivatedRoute, private httpService:httpService) {
        this.user$ = new Observable(observer => {
            this.route.params.subscribe(params => {
                let user: User = this.httpService.user(params['id']);
                observer.next(user);
            })
        })
        this.messages$ = new Observable(observer => this.dummy.forEach(m => observer.next(m)));
    }


    public get user(): Observable<User> {
        return this.user$;
    }


    public get messages(): Observable<Message> {
        return this.messages$
    }
}