import { Component, Input } from '@angular/core';


@Component({
    selector: 'message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.scss']
})

export class MessageComponent {
    @Input() me: boolean; 
    @Input() msg: string;
    date = new Date();
    time: string = `${this.date.getUTCHours()}:${this.date.getUTCMinutes()} AM`;
    constructor() { }
}