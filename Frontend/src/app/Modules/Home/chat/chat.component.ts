import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Feather from 'feather-icons';
import { CoreService } from '../../../Services/core.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements AfterViewInit, OnInit {
    id: number;
    name: string;
    img: string;
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
    messages = []


    constructor(private route: ActivatedRoute, private core: CoreService) {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
        })
        let user: any = this.core.user(this.id);
        this.name = user.name;
        this.img = user.img;
    }

    pushmsg(): void {
        let count = 500;
        this.dummy.forEach(element => {
            setTimeout(() => {
                this.messages.push(element);
            }, count);
            count += 500;
        });
    }


    ngOnInit() {
        Feather.replace();
    }
    ngAfterViewInit() {
        this.pushmsg();
    }
}