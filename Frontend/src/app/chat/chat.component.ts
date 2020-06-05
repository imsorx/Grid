import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

    messages = [
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
    constructor() { }

    ngOnInit() { }
}