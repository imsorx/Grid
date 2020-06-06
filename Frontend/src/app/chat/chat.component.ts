import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements AfterViewInit {
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
        ,        {
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
        },        {
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
    constructor() { }
    ngAfterViewInit() {
        let count = 500;
        this.dummy.forEach(element => {
            setTimeout(() => {
                this.messages.push(element);
                console.log(element);
            }, count);
            count += 300;
        });
    }
}