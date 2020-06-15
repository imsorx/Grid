import { Component, Input } from '@angular/core';

@Component({
    selector: 'topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})

export class TopbarComponent {
    @Input() img:string;
    @Input() name:string;

    constructor() { }
}