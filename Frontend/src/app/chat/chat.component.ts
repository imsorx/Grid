import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements AfterViewInit, AfterViewChecked {

    messagesContainer: HTMLElement;
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
        ,
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
        },
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
        },
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
        },
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


    constructor() { }

    pushmsg(): void {
        let count = 500;
        this.dummy.forEach(element => {
            setTimeout(() => {
                this.messages.push(element);
            }, count);
            count += 500;
        });
    }

    autoscroll(): void {
        this.messagesContainer = document.getElementById("messages");
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }



    ngAfterViewInit() {
        this.pushmsg();
    }
    ngAfterViewChecked() {
        this.autoscroll();
    }
}