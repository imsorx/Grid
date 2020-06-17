import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { ChatService } from '../../../Services/chat.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService]
})

export class ChatComponent implements AfterViewInit, OnInit {
    user: User;
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

    
    constructor(private chatService: ChatService) {
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
        this.chatService.user.subscribe(user => this.user = user);
        this.pushmsg();
    }
}