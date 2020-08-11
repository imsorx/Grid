import { Component, Input, AfterViewInit } from '@angular/core';


@Component({
    selector: 'message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.scss']
})

export class MessageComponent implements AfterViewInit {

    @Input() me: boolean;
    @Input() msg: string;
    @Input() time: Date;
    messagesContainer: HTMLElement;
    container: HTMLElement;
    constructor() { }

    autoscroll(): void {
        this.messagesContainer = document.getElementById("messages");
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    ngAfterViewInit() {
        this.autoscroll();
    }
}