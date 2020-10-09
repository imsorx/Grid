import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { User } from '../../../models/user';
import { Message } from '../../../models/message';
import { CallService } from '../../../services/call.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    providers: [ChatService]
})

export class ChatComponent implements AfterViewInit, OnInit {

    user: User;
    messages: Message[] = [];

    constructor(private chatService: ChatService,private callService:CallService) {
    }


    ngOnInit() {
        this.chatService.user.subscribe(u => this.user = u);
        this.chatService.messages$.subscribe(m => this.messages.push(m));
    }

    ngAfterViewInit() {
    }
    makeCall() {
        this.callService.newCall();
    }
}
