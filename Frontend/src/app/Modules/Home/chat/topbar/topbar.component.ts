import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})

export class TopbarComponent {
    @Input() img: string;
    @Input() name: string;
    @Output() newCall: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    makeCall() {
        this.newCall.emit(name)
    }
}