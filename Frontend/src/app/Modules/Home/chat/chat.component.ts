import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { ChatService } from '../../../services/chat.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService]
})

export class ChatComponent implements AfterViewInit, OnInit {

    user: User = {
        _id: null,
        img: '',
        name: '',
        mail: ''
    };
    messages: Message[] = [];

    constructor(private chatService: ChatService) {
    }


    ngOnInit() {
        this.chatService.user.subscribe(u => this.user = u);
        this.chatService.messages$.subscribe(m => this.messages.push(m));
        Feather.replace();
    }

    ngAfterViewInit() {
    }
}
