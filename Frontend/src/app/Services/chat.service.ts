import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { CoreService } from './core.service';


@Injectable()


export class ChatService {

    user$: Subject<User> = new Subject();

    constructor(private activatedRoute: ActivatedRoute, private core: CoreService) {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            console.log(id);
            this.user$.next(this.core.user(id));
        })
    }

    public get user(): Subject<User> {
        return this.user$;
    }
}