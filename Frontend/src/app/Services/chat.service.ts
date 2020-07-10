import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, Subject } from 'rxjs';
import { httpService } from './http.service';


@Injectable()
export class ChatService {

    user$: Subject<User> = new Subject();
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

    constructor(private route: ActivatedRoute, private httpService: httpService) {
        this.route.params.subscribe(params => {
            this.httpService.user(params['id']).subscribe((u: User) => {
                this.user$.next(u);
            });
        })
        this.messages$ = new Observable(observer => this.dummy.forEach(m => observer.next(m)));
    }

    public get user(): Subject<User> {
        return this.user$;
    }


    public get messages(): Observable<Message> {
        return this.messages$
    }
}