import { Component, Input, AfterViewInit } from '@angular/core';


@Component({
    selector: 'message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.scss']
})

export class MessageComponent implements AfterViewInit {
    messagesContainer: HTMLElement;
    @Input() me: boolean;
    @Input() msg: string;
    container: HTMLElement;
    date = new Date();
    time: string = `${this.date.getUTCHours()}:${this.date.getUTCMinutes()} AM`;
    constructor() { }

    autoscroll(): void {
        this.messagesContainer = document.getElementById("messages");
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    ngAfterViewInit() {
        this.autoscroll();
    }
}